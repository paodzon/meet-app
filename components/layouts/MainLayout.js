import classes from 'components/layouts/MainLayout.module.css';
import Header from './header';

function MainLayout(props) {
  return (
    <div className={classes.layout}>
        <Header/>
        <div>{props.children}</div>
    </div>
  )
}

export default MainLayout