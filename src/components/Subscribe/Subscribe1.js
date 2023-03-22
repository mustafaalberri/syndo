import './Subscribe.css';
import Round from '../HomePage/RoundList/Round'

const handleBlur = evt => {
    if(!evt.target.value){
        evt.target.nextElementSibling.classList.remove('hide');
        evt.target.style.border = 'none';
    }
}

const handleChange = evt => {
    if (evt.target.value) {
        evt.target.nextElementSibling.classList.add('hide');
        evt.target.style.borderBottom = 'solid 1px rgb(140, 140, 140)';
    }
}

const handleCheck = evt => {
    if(evt.target.checked) document.getElementById('req_check').classList.add('hide');
}

const handleBar = evt => {
    document.getElementById('op').textContent = `${Number(evt.target.value).toLocaleString()} EGP`;
}

const handleNext = (onStepChange) => {
    const check = document.getElementById('disc').checked;
    const fname = document.getElementById('nameinp').value;

    if(!fname || !check){
        if(!fname) {
            document.getElementById('req_fname').classList.remove('hide');
            document.getElementById('req_fname').previousElementSibling.style.border = 'none';
        }
        if(!check) document.getElementById('req_check').classList.remove('hide');
        return
    }
    onStepChange('s2');
}

const Subscribe1 = ({ onRouteChange, onStepChange, profile, onProfile }) => {
    return (
        <div className='form__container'>
            <div className='x' onClick={() => onRouteChange('profile')}></div>
            <div className='form__title'>Application Form</div>
            <div className='form__body'>
                <div className='panel'>
                    <div className='panel__item1 topp'>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <div className='panel__icon1'></div>
                        </div>
                        <div>01 <br /> Step-1</div>
                    </div>
                    <div className='panel__item2 bott'>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <div className='panel__icon2'></div>
                        </div>
                        <div>02 <br /> Step-2</div>
                    </div>
                </div>
                <div className='frm__cont'>
                    <div className='form'>
                        <div className='form__input'>
                            <label htmlFor="name">Full Name*</label>
                            <input id='nameinp' type="text" placeholder='John Doe'
                                   onBlur={evt => handleBlur(evt)}
                                   onChange={evt => handleChange(evt)} />
                            <div id='req_fname' className='rq hide'>required field</div>
                        </div>
                        <div className='form__input range'>
                            <label htmlFor="amount">Amount*</label>
                            <input className='slider' id='amount' type="range" max="100000" min="500"
                                   onChange={evt => handleBar(evt)} />
                            <div className='output'>
                                <div id='op'>500 EGP</div>
                                <div>100,000 EGP</div>
                            </div>
                        </div>
                        <div>
                            <div className='disc__title'>Disclaimer</div>
                            <div className='disc__cont'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>
                        </div>
                        <div className='checker'>
                            <input className='check' id='disc' type="checkbox" name="" onChange={evt => handleCheck(evt)} />
                            <label className='check_l' htmlFor="disc">By clicking Next you agree to syndo's terms
                                <div id='req_check' className='cc_check hide'>Please agree to the terms before continuing</div>    
                            </label>
                        </div>
                    </div>
                </div>
                 <div className='round'>
                    <Round features={profile}
                           onRouteChange={onRouteChange}
                           onProfile={onProfile} 
                    />
                </div>
            </div>
            <div>
                <div className='form__btn__ctn'>
                    <button 
                            className='form__btn'
                            onClick={() => handleNext(onStepChange)} >
                        Next</button>
                </div>
            </div>
        </div>
    );
}

export default Subscribe1;