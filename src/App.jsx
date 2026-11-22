import BirthdayMascot from './components/BirthdayMascot.jsx';
import birthdayContent from './birthday-content.html?raw';
import './birthday.css';

const cardContent = birthdayContent.replace(
  '<p class="credit">Made by Deepsinh Raolji</p>',
  '<p class="credit"><a href="https://deepsinhraolji.vercel.app/" target="_blank" rel="noreferrer">Made by Dee</a></p>',
);

export default function App() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: cardContent }} />
      <BirthdayMascot />
    </>
  );
}
