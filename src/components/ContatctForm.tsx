import React, { FormEvent, useState } from "react";
import Button from "./Button";
import styles from "./ContactForm.module.css";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async () => {
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

    console.log(res);
    if (res.ok) {
      toast.success("Email enviado com sucesso!");
    } else {
      toast.error("Houve um erro ao enviar o email!");
    }
  };
  return (
    <div className={styles.form}>
      <div className={styles["input-div"]}>
        <span>Nome</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          className={styles.input}
        />
      </div>
      <div className={styles["input-div"]}>
        <span>Email</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          className={styles.input}
        />
      </div>
      <div className={styles["input-div"]}>
        <span>Mensagem</span>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className={styles.input}
        ></textarea>
      </div>
      <Button text='Hit me up' style={styles.button} clickFunction={onSubmit} />
    </div>
  );
}
