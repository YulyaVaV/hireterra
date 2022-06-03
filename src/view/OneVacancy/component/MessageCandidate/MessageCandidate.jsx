import React from 'react';
import OrangeButtonSmall from '../../../../ui/OrangeButtonSmall/OrangeButtonSmall';
import './MessageCandidate.scss';

const MessageCandidate = () => {
  return (
    <div className="message-cand" id="message-candidat">
      <h2 className="message-cand__title">Message this candidate</h2>
      <p className="message-cand__subtitle">Start chat with the candidate by signing up</p>
      <OrangeButtonSmall title="Offer an open position"/>
    </div>
  )
}

export default MessageCandidate