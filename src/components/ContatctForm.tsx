import React, { FormEvent, useState } from "react";
import Button from "./Button";
import styles from "./ContactForm.module.css";
import { toast } from "react-toastify";
import AttentionIcon from "./icons/AttentionIcon";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameErr, setNameErr] = useState<null | string>(null);
  const [emailErr, setEmailErr] = useState<null | string>(null);
  const [messageErr, setMessageErr] = useState<null | string>(null);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    if (isLoading) return;

    if (name.trim() === "") setNameErr("Por favor, preencha o campo do nome");

    if (!emailPattern.test(email)) {
      setEmail("");
      setEmailErr("O email digitado não é válido");
    }

    if (email.trim() === "")
      setEmailErr("Por favor, preencha o campo do email");

    if (message.trim() === "") setMessageErr("Por favor, escreva uma mensagem");

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      message.trim() === "" ||
      !emailPattern.test(email)
    ) {
      return;
    }

    setIsLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    if (res.ok) {
      setIsLoading(false);
      toast.success("Email enviado com sucesso");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setIsLoading(false);
      toast.error("Houve um erro ao enviar o email");
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles["input-div"]}>
        <span>Nome</span>
        <input
          value={name}
          onChange={(e) => {
            setNameErr(null);
            setName(e.target.value);
          }}
          placeholder={nameErr ? nameErr : ""}
          type='text'
          className={`${styles.input} ${nameErr ? styles.error : ""}`}
        />
        {nameErr && <AttentionIcon className={styles["attention-icon"]} />}
      </div>
      <div className={styles["input-div"]}>
        <span>Email</span>
        <input
          onChange={(e) => {
            setEmailErr(null);
            setEmail(e.target.value);
          }}
          value={email}
          type='email'
          placeholder={emailErr ? emailErr : ""}
          className={`${styles.input} ${emailErr ? styles.error : ""}`}
        />
        {emailErr && <AttentionIcon className={styles["attention-icon"]} />}
      </div>
      <div className={styles["input-div"]}>
        <span>Mensagem</span>
        <textarea
          onChange={(e) => {
            setMessageErr(null);
            setMessage(e.target.value);
          }}
          value={message}
          placeholder={messageErr ? messageErr : ""}
          className={`${styles.input} ${styles["message-input"]} ${
            messageErr ? styles.error : ""
          }`}
        ></textarea>
        {messageErr && (
          <AttentionIcon
            className={`${styles["attention-icon"]} ${styles["message-input-error"]}`}
          />
        )}
      </div>
      <Button
        text='Hit me up'
        style={styles.button}
        clickFunction={onSubmit}
        loading={isLoading}
      />
    </div>
  );
}
