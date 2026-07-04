import "./Invitation.css";
import { useState } from "react";


function DigitalInvitation() {

    type InvitationStep = "back" | "front" | "open";
    const [invitationStep, setInvitationStep] = useState<InvitationStep>("back");
    function handleEnvelopeClick() {
    if (invitationStep === "back") {
        setInvitationStep("front");
        return;
    }

    if (invitationStep === "front") {
        setInvitationStep("open");
        return;
    }
    }

    const recipientName = "Václav Malina";

  return (
    <main className="digital-invitation-page">
      <section className="invitation-scene">
        <button
          className={`envelope ${
            invitationStep === "front" || invitationStep === "open"
                ? "envelope--flipped"
                : ""
            } ${invitationStep === "open" ? "envelope--open" : ""}`}
          type="button"
          onClick={handleEnvelopeClick}
          aria-label="Otočit obálku"
        >
            
            <div className="envelope__card">
                <div className="envelope__side envelope__side--back">
                <p className="envelope__recipient">{recipientName}</p>
                </div>

                <div className="envelope__side envelope__side--front">
                <div className="envelope__pocket">
                    <div className="envelope__inside" />
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