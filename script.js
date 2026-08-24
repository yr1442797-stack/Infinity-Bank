
/* =====================================================
   LOGIN
===================================================== */

function openLogin() {

    document
        .getElementById("loginModal")
        .classList.add("active");

}


function closeLogin() {

    document
        .getElementById("loginModal")
        .classList.remove("active");

}


function loginUser() {

    closeLogin();

    showMessage(
        "Login successful! Welcome to Infinity Bank."
    );

}


/* =====================================================
   NOTIFICATION
===================================================== */

function showMessage(message) {

    const notification =
        document.getElementById("notification");

    notification.innerText = message;

    notification.classList.add("show");

    setTimeout(function() {

        notification.classList.remove("show");

    }, 3000);

}


/* =====================================================
   SEND MONEY
===================================================== */

function sendMoney() {

    const recipient =
        document.getElementById("recipient").value;

    const amount =
        document.getElementById("amount").value;


    if (
        recipient === "" ||
        amount === ""
    ) {

        showMessage(
            "Please enter recipient and amount."
        );

        return;
    }


    showMessage(
        "₹" +
        amount +
        " sent successfully to " +
        recipient
    );

}


/* =====================================================
   CHATBOT OPEN / CLOSE
===================================================== */

function toggleChatbot() {

    const chatbot =
        document.getElementById("chatbot");

    chatbot.classList.toggle("active");

}


/* =====================================================
   ADD MESSAGE
===================================================== */

function addMessage(message, type) {

    const chatMessages =
        document.getElementById("chatMessages");


    const messageElement =
        document.createElement("div");


    messageElement.classList.add(
        "message",
        type === "user"
            ? "user-message"
            : "bot-message"
    );


    messageElement.innerHTML = message;


    chatMessages.appendChild(
        messageElement
    );


    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


/* =====================================================
   CHATBOT RESPONSE
===================================================== */

function getBotResponse(message) {

    const text =
        message.toLowerCase();


    /* CARD */

    if (
        text.includes("card") ||
        text.includes("debit") ||
        text.includes("credit")
    ) {

        return `
        💳 <strong>Card Support</strong><br><br>

        If your card is not working, please check:

        <br>• Your card has not expired
        <br>• Your card is not blocked
        <br>• You have sufficient balance
        <br>• Online transactions are enabled

        <br><br>

        You can also temporarily freeze your card
        from your banking dashboard.

        <br><br>

        For security, never share your
        <strong>PIN, OTP or CVV</strong>.
        `;
    }


    /* LOGIN */

    if (
        text.includes("login") ||
        text.includes("password") ||
        text.includes("sign in")
    ) {

        return `
        🔐 <strong>Login Support</strong><br><br>

        If you cannot login:

        <br>1. Check your email or username.
        <br>2. Check your password.
        <br>3. Make sure your internet connection works.
        <br>4. Try the "Forgot Password" option.

        <br><br>

        If your account is locked,
        please contact customer support.
        `;
    }


    /* TRANSFER */

    if (
        text.includes("transfer") ||
        text.includes("send money") ||
        text.includes("payment")
    ) {

        return `
        💸 <strong>Transfer Support</strong><br><br>

        If your transfer failed:

        <br>• Check the recipient account number.
        <br>• Check your available balance.
        <br>• Check your internet connection.
        <br>• Try again after a few minutes.

        <br><br>

        If money was deducted but the recipient
        did not receive it, please contact support
        with your transaction reference number.
        `;
    }


    /* BALANCE */

    if (
        text.includes("balance") ||
        text.includes("money") ||
        text.includes("account")
    ) {

        return `
        💰 <strong>Account Balance</strong><br><br>

        You can check your available balance
        from the Banking Dashboard.

        <br><br>

        For your security, I cannot access or
        display your real bank balance here.
        `;
    }


    /* LOANS */

    if (
        text.includes("loan") ||
        text.includes("borrow") ||
        text.includes("emi")
    ) {

        return `
        🏦 <strong>Loan Support</strong><br><br>

        Infinity Bank provides:

        <br>• Home Loans
        <br>• Auto Loans
        <br>• Personal Loans

        <br><br>

        You can select a loan type from
        the Loans section of our website.
        `;
    }


    /* MOBILE BANKING */

    if (
        text.includes("mobile") ||
        text.includes("app")
    ) {

        return `
        📱 <strong>Mobile Banking</strong><br><br>

        You can use mobile banking to:

        <br>• Check your balance
        <br>• Send money
        <br>• Pay bills
        <br>• Manage cards
        <br>• Receive notifications
        `;
    }


    /* SECURITY */

    if (
        text.includes("security") ||
        text.includes("fraud") ||
        text.includes("scam") ||
        text.includes("hack")
    ) {

        return `
        🛡️ <strong>Security Help</strong><br><br>

        Never share your:

        <br>• OTP
        <br>• ATM PIN
        <br>• CVV
        <br>• Password

        <br><br>

        If you suspect fraud, immediately
        freeze your card and contact your bank.
        `;
    }


    /* HUMAN */

    if (
        text.includes("human") ||
        text.includes("agent") ||
        text.includes("customer care") ||
        text.includes("support")
    ) {

        return `
        👨‍💼 <strong>Customer Support</strong><br><br>

        A customer support representative
        can help you with your problem.

        <br><br>

        📞 Customer Care:
        <strong>1800-000-000</strong>

        <br><br>

        🕐 Available 24/7
        `;
    }


    /* GREETING */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return `
        👋 Hello!

        <br><br>

        I'm the Infinity Bank virtual assistant.

        <br><br>

        You can ask me about:

        <br>💳 Cards
        <br>💸 Money Transfers
        <br>🔐 Login
        <br>🏦 Loans
        <br>💰 Accounts
        <br>📱 Mobile Banking
        `;
    }


    /* DEFAULT */

    return `
    🤖 I'm sorry, I didn't completely understand
    your problem.

    <br><br>

    Try asking me about:

    <br>💳 Card problems
    <br>🔐 Login problems
    <br>💸 Transfer problems
    <br>💰 Account balance
    <br>🏦 Loans
    <br>📱 Mobile banking

    <br><br>

    You can also type
    <strong>"customer support"</strong>
    to get help from our support team.
    `;

}


/* =====================================================
   SEND CHAT MESSAGE
===================================================== */

function sendChatMessage() {

    const input =
        document.getElementById("chatInput");

    const message =
        input.value.trim();


    if (message === "") {

        return;
    }


    /* USER MESSAGE */

    addMessage(
        message,
        "user"
    );


    input.value = "";


    /* BOT THINKING */

    setTimeout(function() {

        const response =
            getBotResponse(message);

        addMessage(
            response,
            "bot"
        );

    }, 600);

}


/* =====================================================
   QUICK QUESTION
===================================================== */

function quickQuestion(question) {

    const input =
        document.getElementById("chatInput");

    input.value = question;

    sendChatMessage();

}


/* =====================================================
   ENTER KEY
===================================================== */

document
    .getElementById("chatInput")
    .addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                sendChatMessage();

            }

        }
    );


/* =====================================================
   CLOSE LOGIN WHEN OUTSIDE
===================================================== */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "loginModal"
            );


        if (
            event.target === modal
        ) {

            closeLogin();

        }

    }
);
