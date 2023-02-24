import classes from 'components/layouts/header.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () =>{
    const router = useRouter();

    return(<header className={classes.header}>
        <h1>Logo</h1>
        <div className={classes.header__links}>
            <Link href='/'>Home</Link>
            <Link href='/new-meetup'>New Meetup</Link>
        </div>
    </header>);
};

export default Header;