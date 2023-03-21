import './Subscribe.css';
import Round from '../HomePage/RoundList/Round';

const handleBlur = evt => {
    if (!evt.target.value){
        evt.target.nextElementSibling.classList.remove('hide');
        evt.target.style.border = 'none';
    }
}

const handleSubmit = () => {
    const cname = document.getElementById('cname');
    const cnum = document.getElementById('cnum');
    const cvv = document.getElementById('cvv');
    const cdate = document.getElementById('cdate');

    if (!cname.value || !cnum.value || !cvv.value || !cdate) {
        if(!cname.value) {
            cname.style.border = 'none';
            cname.nextElementSibling.classList.remove('hide');
        }
        if(!cnum.value) {
            cnum.style.border = 'none';
            cnum.nextElementSibling.classList.remove('hide');
        }
        if(!cvv.value) {
            cvv.style.border = 'none';
            cvv.nextElementSibling.classList.remove('hide');
        }
        if (!cdate.value) {
            cdate.style.border = 'none';
            cdate.nextElementSibling.classList.remove('hide');
        }
        return
    }

    //handle routing
}

const handleChange = evt => {
    if (evt.target.value) {
        evt.target.nextElementSibling.classList.add('hide');
        evt.target.style.borderBottom = 'solid 1px rgb(140, 140, 140)';
    }
}

const handleCVV = evt => {
    if(evt.target.value.length < 3) {
        evt.target.nextElementSibling.classList.remove('hide');
        evt.target.style.border = 'none';
    }else{
        evt.target.nextElementSibling.classList.add('hide');
        evt.target.style.borderBottom = 'solid 1px rgb(140, 140, 140)';
    }
    const { value, maxLength } = evt.target;
    const cvv = value.slice(0, maxLength);
    evt.target.value = cvv;
}

const Subscribe2 = ({ onRouteChange, profile, onProfile }) => {
    return (
        <div className='form__container'>
            <div className='x' onClick={() => onRouteChange('profile')} ></div>
            <div className='form__title'>Application Form</div>
            <div className='form__body'>
                <div className='panel'>
                    <div className='panel__item1 topp'>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <div className='panel__icon11'></div>
                        </div>
                        <div>01 <br /> Step-1</div>
                    </div>
                    <div className='panel__item2 bott'>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <div className='panel__icon22'></div>
                        </div>
                        <div>02 <br /> Step-2</div>
                    </div>
                </div>
                <div className='frm2__cont'>
                    <div className='form2'>
                        <div className='topform'>
                            <div className='cc cname'>
                                <label htmlFor="cname">Cardholder Name*</label>
                                <input type="text" id="cname"
                                       onBlur={evt => handleBlur(evt)}
                                       onChange={evt => handleChange(evt)} />
                                <div id='req_cname' className='rq hide'>required field</div>
                            </div>
                            <div className='cc cr'>
                                <label htmlFor="cname">Card Number*</label>
                                <input type="number" id="cnum" min='0' 
                                       onBlur={evt => handleBlur(evt)} 
                                       onChange={evt => handleChange(evt)} />
                                <div id='req_cnum' className='rq hide'>invalid value (should be numbers only)</div>
                            </div>
                        </div>
                        <div className='topform'>
                            <div className='cc cdate'>
                                <label htmlFor="cdate">Expiry Date*</label>
                                <input type="date" id="cdate" onChange={evt => handleChange(evt)} />
                                <div id='req_cname' className='rq hide'>required field</div>
                            </div>
                            <div className='cc cr'>
                                <label htmlFor="cvv">CVV*</label>
                                <input type="number" id="cvv" maxLength='3' min='0' max='999'
                                       onBlur={evt => handleBlur(evt)}
                                       onChange={evt => handleCVV(evt)} />
                                <div id='req_cvv' className='rq hide'>invalid value (should be 3 digits only)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='round r2'>
                    <Round 
                        onProfile={onProfile}
                        onRouteChange={onRouteChange}
                        features={profile} />
                </div>
            </div>
            <div>
                <div className='form__btn__ctn'>
                    <button type='submit' className='form__btn' 
                            onClick={() => handleSubmit()} >
                    Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Subscribe2;