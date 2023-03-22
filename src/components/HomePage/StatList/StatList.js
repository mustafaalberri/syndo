import Stat from "./Stat";
import './StatList.css'

const StatList = () => {
    const stats = [
        {
            num: '100',
            desc: 'Rounds',
        },
        {
            num: 'EGP 200K',
            desc: 'Total Raised',
        },
        {
            num: 'EGP 50K+',
            desc: 'Total Raised',
        },
        {
            num: '30+',
            desc: 'Startups',
        }]

    return (
        <div className="stats__container">
            <h1>Let&apos;s talk numbers!</h1>
            <div className="stat__grid" >
                {
                    stats.map((stat,i) => {
                        return (
                            <Stat key={i} data={stat} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default StatList;