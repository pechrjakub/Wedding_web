import { useState } from "react";
import "./Invitation.css";

type InvitationStep =
  | "back"
  | "front"
  | "open"
  | "letter"
  | "revealed"
  | "qr";

function DigitalInvitation() {
  const [invitationStep, setInvitationStep] = useState<InvitationStep>("back");

  const recipientName = "Václav Malina";

  const isFlipped =
    invitationStep === "front" ||
    invitationStep === "open" ||
    invitationStep === "letter" ||
    invitationStep === "revealed" ||
    invitationStep === "qr";

const isOpen =
  invitationStep === "open" ||
  invitationStep === "letter" ||
  invitationStep === "revealed" ||
  invitationStep === "qr";

const isLetter = invitationStep === "letter";
const isRevealed = invitationStep === "revealed" || invitationStep === "qr";
const isQr = invitationStep === "qr";

function handleEnvelopeClick() {
  if (invitationStep === "back") {
    setInvitationStep("front");
    return;
  }

  if (invitationStep === "front") {
    setInvitationStep("open");

    window.setTimeout(() => {
      setInvitationStep((currentStep) =>
        currentStep === "open" ? "letter" : currentStep
      );
    }, 1000); /*Tady upravuj pro prodloužení prodlevy po otevření obálky */

    window.setTimeout(() => {
      setInvitationStep((currentStep) =>
        currentStep === "letter" ? "revealed" : currentStep
      );
    }, 2400); /*Tady upravuj pro prodloužení prodlevy vyjetí oznámení*/

    window.setTimeout(() => {
      setInvitationStep((currentStep) =>
        currentStep === "revealed" ? "qr" : currentStep
      );
    }, 5400);
    return;
  }

  if (invitationStep === "revealed") {
    setInvitationStep("qr");
    return;
  }

  if (invitationStep === "qr") {
    setInvitationStep("revealed");
    return;
  }
}

  return (
    <main
      className={`digital-invitation-page ${
        invitationStep === "revealed" ? "digital-invitation-page--focus" : ""
      }`}
    >
      <div
        className={`invitation-overlay ${
          isRevealed ? "invitation-overlay--visible" : ""
        }`}
      />

      <section className="invitation-scene">
          <button
            className={`envelope ${isFlipped ? "envelope--flipped" : ""} ${
              isOpen ? "envelope--open" : ""
            } ${isLetter ? "envelope--letter" : ""} ${
              isRevealed ? "envelope--revealed" : ""
            } ${isQr ? "envelope--qr" : ""}`}
            type="button"
            onClick={handleEnvelopeClick}
            aria-label="Otevřít svatební oznámení"
          >

          <div className="envelope__card">
            <div className="envelope__side envelope__side--back">
              <p className="envelope__recipient">{recipientName}</p>
            </div>
            <div className="envelope__side envelope__side--front">
            <div className="envelope__front-shape">
              <div className="envelope__inside" />

              <div className="envelope__letter-window">
                <div className="envelope__invitation-shell">
                  <div className="invitation-card">
                    <div className="invitation-card__side invitation-card__side--front">
                      <img
                        className="envelope__invitation"
                        src="/images/oznameni.jpg"
                        alt="Svatební oznámení"
                      />
                    </div>

                    <div className="invitation-card__side invitation-card__side--back">
                      <img
                        className="invitation-card__qr"
                        src="/images/qr_code.png"
                        alt="QR kód na svatební web"
                      />
                      <p className="invitation-card__qr-text">
                        Načtěte QR kód a pokračujte na svatební web.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="envelope__flap envelope__flap--left" />
              <div className="envelope__flap envelope__flap--right" />
              <div className="envelope__flap envelope__flap--bottom" />
            </div>

            <div className="envelope__flap envelope__flap--top" />

            <img
              className="envelope__seal"
              src="/images/pecet.png"
              alt="Svatební pečeť"
            />
          </div>
          </div>
        </button>
      </section>
    </main>
  );
}

export default DigitalInvitation;