import { Mascot } from 'page-mascot';

export default function BirthdayMascot() {
  return (
    <div className="birthday-mascot">
      <Mascot
        directions="/mascots/ballerina-directions.webp"
        reactions="/mascots/ballerina-reactions.png"
        size={140}
        label="Deexa's ballerina"
      />
    </div>
  );
}
