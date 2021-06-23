import classes from './styles/layout.module.css';

function App() {
  return (
    <div className={classes.layout}>
      <span className={classes.taskbar}>
        <div className={classes.btnContainer}>
          <button className={classes.startbtn}>Start</button>
        </div>
        <div className={classes.startbtndivider}></div>
        <p>9:30 PM</p>
      </span>
    </div>
  );
}

export default App;
