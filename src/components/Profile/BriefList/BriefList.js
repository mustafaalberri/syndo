import './BriefList.css';

const BriefList = () => {
    const briefs = [
        {
            head: 'Transportation',
            desc: 'Industry',
        },
        {
            head: 'Limited Liability Company',
            desc: 'Company Type',
        },
        {
            head: 'Egypt',
            desc: 'Country of Incorporation',
        },
        {
            head: 'April 2021',
            desc: 'Date of Incorporation',
        },
        {
            head: 'Revenue Generating',
            desc: 'Startup Stage',
        }]

    return (
        <>
            <div className='bt__br bold br__t'>BRIEF</div>
            {
                briefs.map((brief, i) => {
                    return (
                        <div key={i} className='bt__br'>
                            <div className='br__t'>{brief.head}</div>
                            <div className='info'>
                                <div>{brief.desc}</div>
                                <div className='infoicon'></div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}

export default BriefList;