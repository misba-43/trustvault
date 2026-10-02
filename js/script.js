/* =========================================================
   TRUSTVAULT - AI ASSISTANT
========================================================= */

.ai-intro-card {
    display: flex;
    align-items: center;

    gap: 17px;

    margin-top: 30px;

    padding: 25px;

    border-radius: 18px;

    background:
        linear-gradient(
            135deg,
            #e7eee8,
            #f2ede1
        );

    border: 1px solid rgba(49, 91, 79, 0.08);

    box-shadow:
        0 10px 28px rgba(39, 52, 46, 0.05);
}

.ai-intro-icon {
    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 15px;

    background: #315b4f;

    color: #f5ead1;

    font-size: 22px;

    box-shadow:
        0 7px 18px rgba(49, 91, 79, 0.18);
}

.ai-intro-card p {
    margin: 0 0 5px;

    font-size: 7px;
    letter-spacing: 1.8px;
    font-weight: 800;

    color: #8b7652;
}

.ai-intro-card h2 {
    margin: 0;

    font-size: 22px;

    color: #2b3a34;
}

.ai-intro-card span {
    display: block;

    max-width: 600px;

    margin-top: 6px;

    font-size: 10px;
    line-height: 1.5;

    color: #818983;
}


/* QUICK HELP */

.ai-quick-section {
    margin-top: 24px;
}

.ai-section-heading p {
    margin: 0 0 5px;

    font-size: 7px;
    letter-spacing: 1.7px;
    font-weight: 800;

    color: #8b7652;
}

.ai-section-heading h2 {
    margin: 0;

    font-size: 17px;

    color: #2b3a34;
}

.ai-quick-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 11px;

    margin-top: 13px;
}

.ai-quick-card {
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    padding: 16px;

    border: 1px solid rgba(54, 75, 66, 0.08);

    border-radius: 14px;

    background: rgba(255, 253, 248, 0.88);

    text-align: left;

    cursor: pointer;

    box-shadow:
        0 6px 18px rgba(39, 52, 46, 0.035);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.ai-quick-card:hover {
    transform: translateY(-3px);

    box-shadow:
        0 10px 24px rgba(39, 52, 46, 0.07);
}

.ai-quick-icon {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 11px;

    border-radius: 9px;

    background: #e7eee8;

    color: #496858;

    font-size: 13px;
    font-weight: 800;
}

.ai-quick-card strong {
    font-size: 10px;

    color: #34443d;
}

.ai-quick-card small {
    margin-top: 5px;

    font-size: 8px;
    line-height: 1.4;

    color: #969c97;
}


/* CHAT */

.ai-chat-card {
    margin-top: 20px;

    overflow: hidden;

    border-radius: 17px;

    background: rgba(255, 253, 248, 0.9);

    border: 1px solid rgba(54, 75, 66, 0.08);

    box-shadow:
        0 8px 25px rgba(39, 52, 46, 0.045);
}

.ai-chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 19px 22px;

    border-bottom:
        1px solid rgba(54, 75, 66, 0.07);
}

.ai-chat-header p {
    margin: 0 0 4px;

    font-size: 7px;
    letter-spacing: 1.7px;
    font-weight: 800;

    color: #8b7652;
}

.ai-chat-header h2 {
    margin: 0;

    font-size: 16px;

    color: #2b3a34;
}

.ai-online-status {
    display: flex;
    align-items: center;

    gap: 6px;

    font-size: 8px;
    font-weight: 700;

    color: #58705f;
}

.ai-online-status i {
    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: #5e886d;
}


/* MESSAGES */

.ai-chat-messages {
    min-height: 230px;
    max-height: 350px;

    overflow-y: auto;

    padding: 21px;
}

.ai-message {
    display: flex;

    gap: 9px;

    margin-bottom: 18px;
}

.ai-message-icon {
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 9px;

    background: #e7eee8;

    color: #496858;

    font-size: 10px;
    font-weight: 800;
}

.ai-message-content {
    max-width: 70%;
}

.ai-message-content span {
    display: block;

    margin-bottom: 4px;

    font-size: 7px;
    font-weight: 800;

    color: #8b938d;
}

.ai-message-content p {
    margin: 0;

    padding: 10px 12px;

    border-radius: 4px 12px 12px 12px;

    background: #f0eee6;

    color: #536059;

    font-size: 9px;
    line-height: 1.55;
}


/* USER MESSAGE */

.user-message {
    justify-content: flex-end;
}

.user-message .ai-message-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.user-message .ai-message-content p {
    border-radius: 12px 4px 12px 12px;

    background: #315b4f;

    color: white;
}

.user-message .ai-message-content span {
    text-align: right;
}


/* INPUT */

.ai-input-area {
    display: flex;

    gap: 9px;

    padding: 14px 17px;

    border-top:
        1px solid rgba(54, 75, 66, 0.07);

    background: #faf8f1;
}

.ai-input-area input {
    flex: 1;

    min-width: 0;

    padding: 11px 13px;

    border: 1px solid #deded6;
    border-radius: 9px;

    outline: none;

    background: #fffefa;

    color: #34443d;

    font-size: 9px;
}

.ai-input-area input:focus {
    border-color: #9db1a4;
}

.ai-input-area button {
    padding: 0 16px;

    border: none;
    border-radius: 9px;

    background: #315b4f;

    color: white;

    font-size: 9px;
    font-weight: 700;

    cursor: pointer;
}

.ai-input-area button span {
    margin-left: 4px;
}


/* DISCLAIMER */

.ai-disclaimer {
    display: flex;
    align-items: flex-start;

    gap: 8px;

    margin-top: 12px;

    padding: 10px 12px;

    border-radius: 9px;

    background: rgba(242, 237, 225, 0.6);
}

.ai-disclaimer > span {
    color: #8b7652;

    font-size: 10px;
}

.ai-disclaimer p {
    margin: 0;

    font-size: 7px;
    line-height: 1.5;

    color: #969c97;
}


/* MOBILE */

@media (max-width: 800px) {

    .ai-quick-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

}

@media (max-width: 550px) {

    .ai-intro-card {
        align-items: flex-start;
    }

    .ai-quick-grid {
        grid-template-columns: 1fr;
    }

    .ai-message-content {
        max-width: 82%;
    }

    .ai-input-area {
        flex-direction: column;
    }

    .ai-input-area button {
        padding: 10px;
    }

}