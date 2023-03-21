import './BriefList.css';

const BriefList = () => {
    return (
        <>
            <div className='bt__br bold br__t'>BRIEF</div>
            <div className='bt__br'>
                <div className='br__t'>Transportation</div>
                <div className='info'>
                    <div>Industry </div>
                    <div className='infoicon'></div>
                </div>
            </div>
            <div className='bt__br'>
                <div className='br__t' >Limited Liability Company</div>
                <div className='info'>
                    <div>Company Type </div>
                    <div className='infoicon'></div>
                </div>
            </div>
            <div className='bt__br'> 
                <div className='br__t'>Egypt</div>
                <div className='info'>
                    <div>Country of Incorporation </div>
                    <div className='infoicon'></div>
                </div>
            </div>
            <div className='bt__br'>
                <div className='br__t'>April 2021</div>
                <div className='info'>
                    <div>Date of Incorporation</div>
                    <div className='infoicon'></div>
                </div>
            </div>
            <div className='bt__br'>
                <div className='br__t'>Revenue Generating</div>
                <div className='info'>
                    <div>Startup Stage</div>
                    <div className='infoicon'></div>
                </div>
            </div>
        </>
    );
}

export default BriefList;