import Stat from "./Stat";
import './StatList.css'

const StatList = () => {
    return (
        <div className="stats__container">
            <h1>Let&apos;s talk numbers!</h1>
            <div className="stat__grid" >
                <Stat data={{
                    num: '100',
                    desc: 'Rounds',
                }} />
                <Stat data={{
                    num: 'EGP 200K',
                    desc: 'Total Raised',
                }} />
                <Stat data={{
                    num: 'EGP 50K+',
                    desc: 'Total Raised',
                }} />
                <Stat data={{
                    num: '30+',
                    desc: 'Startups',
                }} />
            </div>
        </div>
    );
}

export default StatList;