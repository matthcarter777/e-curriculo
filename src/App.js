import Content from './components/content/Content';
import PersonalInformation from './components/personalInformation/PersonalInformations';

import css from './styles.module.css';

function App() {
  return (
    <div className={css.container} >
      <PersonalInformation />
      <Content />
    </div>
  );
}

export default App;
