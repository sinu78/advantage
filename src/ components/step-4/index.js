import { useReducer, useState } from 'react';
import logo from '../../assets/images/advatage-logo.png';
import './index.css';

const Step_4 = ({submitForm}) => {
    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { "fullName": "", "dateOfBirth": "", "officialEmail": "", "email": "", "mobile": "", "spouseName": "", "moto": "", "referal": "", "office": "", "profession": "", "designation": "", "aboutDesignation": "", "residentialAddress": "", "jobDescription": "", "citizen": "", "qualification": "", "experience": "", "familyIncomeSource": "", "annualSalary": "", "inHandSalary": "", "maritalStatus": "", "savingOption": "", "dependent": "", "realEstate": "", "investments": "", "investments_value": "", "loans": "", "expenses": "", "insurance": "", "family": "", "home": "", "financial_assets": "", "fd": "", "mutualFund": "", "pms":"", "ppf":"", "directEquity":"",   "point1": "", "point2": "", "point3": "", "point4": "", "point5": "", "point6": "", "point7": "", "point8": "", "point9": "", "point10": "", "reasonExistingInvestments": "", "goalOfExistingInvestments": "", "existingInvestments": "", "riskProfile" : "", "investmentsRiskProfile": "", "investMore": "", "careOfNeed": "", "doctorSay": "" }
    );
    const [formSubmitted, setFormSubmit] = useState(false);
    const [errors, setErrors] = useState([]);
    const REQUIRED_FIELDS = [
        { key: 'fullName', label: 'Full Name' },
        { key: 'dateOfBirth', label: 'Date Of Birth' },
        { key: 'officialEmail', label: 'Official Email' },
        { key: 'email', label: 'Email' },
        { key: 'mobile', label: 'Mobile' },
        { key: 'moto', label: 'Objective of utilising our services' },
        { key: 'referal', label: 'How did you hear about us'},
        { key: 'jobDescription', label: 'Job Description' },
        { key: 'familyIncomeSource', label: 'Family Income Source' },
        { key: 'maritalStatus', label: 'Marital Status' },
        { key: 'home', label: 'Self Occupied home' }
    ]
    const email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
    const mobile_regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/gi;

    const handleChange = (e) => {
        const { name, value } = e.target
        setState({ [name]: value })
    }

    const handleSubmit = () => {
        setFormSubmit(true)
        const isValidated = validateForm()
        if(isValidated){
            submitForm(state)
        }
        else {
            window.scrollTo(0, 272)
        }
    }

    const validateForm = () => {
        const errors = []
        for (let item in state) {
            const requiredField = REQUIRED_FIELDS.find(field=> field['key'] === item)
            if (requiredField && !state[item]) {
                errors.push(`${requiredField['label']} is Required.`)
            }
            else if (['email', 'officialEmail'].includes(item) && !state[item].match(email_regex)) {
                errors.push('Invalid Email. Please enter email as name@email.com')
            }
            else if (item === 'mobile' && !mobile_regex.test(state[item])) {
                errors.push('Mobile No is not valid.')
            }
        }

        if (errors.length) {
            setErrors(errors)
            return false
        }
        return true
    }

    return (
        <main className="step_4">
            <section className="form-section">
                <div className="container-box">
                    <div className="head-section">
                        <img src={logo} />
                    </div>
                    <h1 className="custom-button">Please fill in all the necessary bits of information that I need to have from you to be able to assess the further course of action. Please don't hold back. Please don't worry, everything is confidential. 
                    I am legally bound to protect your privacy.
                    </h1>
                    <div className="form-tab">
                    {errors && errors.map((item, index)=>{
                        return(
                            <div key={index} className="alert alert-danger d-flex align-items-center" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                                </svg>
                                <div style={{marginLeft: '10px'}}>
                                    {item}
                                </div>
                            </div>
                        )
                    })}
                        <div className="tab-block" id="tab-block">
                            <form>
                                <div className="tab-cont">
                                    <div className="tab-pane" id="step1Box">
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>What is your full name?<sup>*</sup></label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.fullName} onChange={(e)=>handleChange(e)} className={`${(!state.name && formSubmitted) ? 'error' : ''}`} type="text" id="fullName" name="fullName" placeholder="Full name..." required />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>What is your Date of Birth?<sup>*</sup></label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.dateOfBirth} onChange={(e)=>handleChange(e)} className={`${(!state.dateOfBirth && formSubmitted) ? 'error' : ''}`} type="text" className="datepicker" id="dateOfBirth" name="dateOfBirth"
                                                    placeholder="Date of birth" required />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Official Email<sup>*</sup></label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.officialEmail} onChange={(e)=>handleChange(e)} className={`${(!state.officialEmail && formSubmitted) ? 'error' : ''}`} type="text" id="officialEmail" name="officialEmail"
                                                    placeholder="Official Email" required />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Personal Email<sup>*</sup></label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.email} onChange={(e)=>handleChange(e)} className={`${(!state.email && formSubmitted) ? 'error' : ''}`} type="text" id="email" name="email" placeholder="Personal Email"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Mobile No<sup>*</sup></label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.mobile} onChange={(e)=>handleChange(e)} className={`${(!state.mobile && formSubmitted) ? 'error' : ''}`} type="text" id="mobile" name="mobile" placeholder="Mobile no." required />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>What is your Spouse name?</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.spouseName} onChange={(e)=>handleChange(e)} type="text" id="spouseName" name="spouseName" placeholder="Spouse name" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>What is the objective of utilising our services. (Please be specific) -
                                                    Are
                                                    you looking at meeting your financial goals, needs and having an investment
                                                    plan
                                                    in place?<sup>*</sup></label>
                                            </div>
                                            <div className="col-6">
                                                <textarea value={state.moto} onChange={(e)=>handleChange(e)} className={`${(!state.moto && formSubmitted) ? 'error' : ''}`} name="moto" id="moto"
                                                    placeholder="What is the objective of utilising our services."
                                                    required></textarea>
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-1">
                                                <label>How did you hear about us?<sup>*</sup></label>
                                                <select value={state.referal} onChange={(e)=>handleChange(e)} id="referal" name="referal" className="referal">
                                                    <option value="">Select</option>
                                                    <option value="Google">Google</option>
                                                    <option value="Facebook">Facebook</option>
                                                    <option value="SMS">SMS</option>
                                                    <option value="Email">Email</option>
                                                    <option value="Friends/Family">Friends/Family</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Where do you work? Please mention company name and address.</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.office} onChange={(e)=>handleChange(e)} type="text" id="office" name="office"
                                                    placeholder="Where do you work? Please mention company name and address." />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Profession:</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.profession} onChange={(e)=>handleChange(e)} type="text" id="profession" name="profession" placeholder="Profession" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Designation:</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.designation} onChange={(e)=>handleChange(e)} type="text" id="designation" name="designation"
                                                    placeholder="Designation" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Please briefly describe your job designation and profile</label>
                                            </div>
                                            <div className="col-6">
                                                <textarea value={state.aboutDesignation} onChange={(e)=>handleChange(e)} name="aboutDesignation" id="aboutDesignation"
                                                    placeholder="Please briefly describe your job designation and profile"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Please mention residential address.</label>
                                            </div>
                                            <div className="col-6">
                                                <textarea value={state.residentialAddress} onChange={(e)=>handleChange(e)} id="residentialAddress" name="residentialAddress"
                                                    placeholder="Please mention residential address"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Job Description<sup>*</sup></label>
                                            </div>
                                            <div className="col-6">
                                                <textarea value={state.jobDescription} onChange={(e)=>handleChange(e)} name="jobDescription" id="jobDescription"
                                                    placeholder="Job Description"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Citizen: ( Your Citizenship) Your current Residence in…</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.citizen} onChange={(e)=>handleChange(e)} type="text" id="citizen" name="citizen" placeholder="Citizen" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Qualification:</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.qualification} onChange={(e)=>handleChange(e)} type="text" id="qualification" name="qualification"
                                                    placeholder="Qualification" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Total Experience:</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.experience} onChange={(e)=>handleChange(e)} type="text" id="experience" name="experience" placeholder="Experience" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Family Income Sources<sup>*</sup></label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.familyIncomeSource} onChange={(e)=>handleChange(e)} type="text" id="familyIncomeSource" name="familyIncomeSource"
                                                    placeholder="Income Source" required />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Annual Salary/ Gross Annual Income:(CTC)</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.annualSalary} onChange={(e)=>handleChange(e)} type="text" id="annualSalary" name="annualSalary"
                                                    placeholder="Annual Salary" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Net take home per month (less of taxes):</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.inHandSalary} onChange={(e)=>handleChange(e)} type="text" id="inHandSalary" name="inHandSalary"
                                                    placeholder="Net take home per month" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Marital Status<sup>*</sup></label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.maritalStatus} onChange={(e)=>handleChange(e)} type="text" id="maritalStatus" name="maritalStatus"
                                                    placeholder="Marital Status" required />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Savings currently where?</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.savingOption} onChange={(e)=>handleChange(e)} type="text" id="savingOption" name="savingOption"
                                                    placeholder="Savings currently where?" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>How many people are dependent on you financially- Please provide
                                                    relationships if possible. (Eg. wife/ son/ daughter)</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.dependent} onChange={(e)=>handleChange(e)} type="text" id="dependent" name="dependent" placeholder="How many people are dependent on you financially- Please provide
                                                relationships if possible."/>
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Real Estate:(if any) Value and where</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.realEstate} onChange={(e)=>handleChange(e)} type="text" id="realEstate" name="realEstate" placeholder="Real Estate" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>All your investments are done in.</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.investments} onChange={(e)=>handleChange(e)} type="text" id="investments" name="investments"
                                                    placeholder="Investments" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>What is the total value of your investments today:</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.investments_value} onChange={(e)=>handleChange(e)} type="text" id="investments_value" name="investments_value"
                                                    placeholder="Investments value" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Loans: (if any) For what and outstanding amount if any</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.loans} onChange={(e)=>handleChange(e)} type="text" id="loans" name="loans" placeholder="Loans" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Expenses:</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.expenses} onChange={(e)=>handleChange(e)} type="text" id="expenses" name="expenses" placeholder="Expenses" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>What is your total life insurance cover?</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.insurance} onChange={(e)=>handleChange(e)} type="text" id="insurance" name="insurance" placeholder="Insurance" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Family:(if any) and consists of…</label>
                                            </div>
                                            <div className="col-6">
                                                <input value={state.family} onChange={(e)=>handleChange(e)} type="text" id="family" name="family" placeholder="Family" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-6">
                                                <label>Is your home self-occupied?<sup>*</sup></label>
                                            </div>
                                            <div className="col-6">
                                                <select value={state.home} onChange={(e)=>handleChange(e)} id="home" name="home">
                                                    <option value="">Select</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-1">
                                                <p>Please highlight the financial assets you own(you could highlight more than
                                                    one option, if required.)</p>
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-3">
                                                <label>a&#41; Life Insurance Policies</label>
                                                <input onChange={(e)=>handleChange(e)} type="checkbox" name="financial_assets" value="Life Insurance Policies" />
                                            </div>
                                            <div className="col-3">
                                                <label>b&#41; FDs/RDs</label>
                                                <input onChange={(e)=>handleChange(e)} type="checkbox" id="fd" name="fd" value="FDs/RDs" />
                                            </div>
                                            <div className="col-3">
                                                <label>a&#41; Mutual Funds</label>
                                                <input onChange={(e)=>handleChange(e)} type="checkbox" id="mutualFund" name="mutualFund"
                                                    value="Mutual Funds" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-3">
                                                <label>d&#41; Direct Equity</label>
                                                <input onChange={(e)=>handleChange(e)} type="checkbox" id="directEquity" name="directEquity"
                                                    value="Direct Equity" />
                                            </div>
                                            <div className="col-3">
                                                <label>e&#41; PMS</label>
                                                <input onChange={(e)=>handleChange(e)} type="checkbox" id="pms" name="pms" value="PMS" />
                                            </div>
                                            <div className="col-3">
                                                <label>e&#41; PPF</label>
                                                <input onChange={(e)=>handleChange(e)} type="checkbox" id="ppf" name="ppf" value="PPF" />
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <div className="col-1">
                                                <h3>Challenges: (Issues that you want me to work on) or Your Goals ( This will
                                                    be Scope Of Work)</h3>
                                            </div>
                                            <div className="col-1">
                                                <input value={state.point1} onChange={(e)=>handleChange(e)} type="text" id="point1" placeholder="Point 1." name="point1" />
                                                <input value={state.point2} onChange={(e)=>handleChange(e)} type="text" id="point2" placeholder="Point 2." name="point2" />
                                                <input value={state.point3} onChange={(e)=>handleChange(e)} type="text" id="point3" placeholder="Point 3." name="point3" />
                                                <input value={state.point4} onChange={(e)=>handleChange(e)} type="text" id="point4" placeholder="Point 4." name="point4" />
                                                <input value={state.point5} onChange={(e)=>handleChange(e)} type="text" id="point5" placeholder="Point 5." name="point5" />
                                                <input value={state.point6} onChange={(e)=>handleChange(e)} type="text" id="point6" placeholder="Point 6." name="point6" />
                                                <input value={state.point7} onChange={(e)=>handleChange(e)} type="text" id="point7" placeholder="Point 7." name="point7" />
                                                <input value={state.point8} onChange={(e)=>handleChange(e)} type="text" id="point8" placeholder="Point 8." name="point8" />
                                                <input value={state.point9} onChange={(e)=>handleChange(e)} type="text" id="point9" placeholder="Point 9." name="point9" />
                                                <input value={state.point10} onChange={(e)=>handleChange(e)} type="text" id="point10" placeholder="Point 10." name="point10" />
                                            </div>
                                        </div>

                                        <div className="form-div">
                                            <div className="col-1">
                                                <p>Questions (Related to your Existing Investments)</p>
                                            </div>
                                            <div className="col-1">
                                                <label >1. What is the reason behind existing investments?</label>
                                                <textarea value={state.reasonExistingInvestments} onChange={(e)=>handleChange(e)}  name="reasonExistingInvestments" id="reasonExistingInvestments" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div className="col-1">
                                                <label >2. Any specific goal for your existing investments?</label>
                                                <textarea value={state.goalOfExistingInvestments} onChange={(e)=>handleChange(e)} name="goalOfExistingInvestments" id="goalOfExistingInvestments" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div className="col-1">
                                                <label >3. What is the time horizon of Existing Investments?</label>
                                                <textarea value={state.existingInvestments} onChange={(e)=>handleChange(e)} name="existingInvestments" id="existingInvestments" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div className="col-1">
                                                <label >4. What is your Risk profile? (Aggressive or Conservative)</label>
                                                <textarea value={state.riskProfile} onChange={(e)=>handleChange(e)} name="riskProfile" id="riskProfile" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div className="col-1">
                                                <label >5. Does existing investments match with your Risk profile?</label>
                                                <textarea value={state.investmentsRiskProfile} onChange={(e)=>handleChange(e)} name="investmentsRiskProfile" id="investmentsRiskProfile" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div className="col-1">
                                                <label >6. Where do you prefer to invest more? (Debt/Equity)</label>
                                                <textarea value={state.investMore} onChange={(e)=>handleChange(e)} name="investMore" id="investMore" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div className="col-1">
                                                <label >7. Imagine that you have enough money to take care of your needs,
                                                    now and in the
                                                    future. How would you live your life?<br />Would you change
                                                    anything?</label>
                                                <textarea value={state.careOfNeed} onChange={(e)=>handleChange(e)} name="careOfNeed" id="careOfNeed" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div className="col-1">
                                                <label >8. Imagine your doctor says you have only 5-10 years to live. You
                                                    won’t feel sick,
                                                    but you’ll never know when death will come.<br />What will you do? Will you
                                                    change
                                                    your life? How?</label>
                                                <textarea value={state.doctorSay} onChange={(e)=>handleChange(e)} name="doctorSay" id="doctorSay" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                        </div>
                                        <div className="form-div">
                                            <a onClick={()=>handleSubmit()} id="submitFormBtn" className="btn-next" >Submit</a>
                                        </div>

                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="form-div">
                            <div className="col-1">
                                <h3 className="hightlight">Note/Disclaimer: We are asking you the above information for
                                    our understanding
                                    only. This information is strictly confiential and is not viewed or shared by me
                                    with anyone, except me. </h3>
                            </div>
                        </div>
                        <div className="form-div">
                            <div className="col-1">
                                <h3 className="hightlight">However to give you this Non Disclosure Agreement in detail, you can ask
                                    for specific agreement with your name or visit our site for checking out the terms before
                                    you start. To know more about the The Advantage Non-Disclosure Agreement (TANDA) copy 2021,
                                    visit this
                                    link: <a
                                        href="http://www.advantagefp.in/contact-us/the_advantage_non_disclosure_agreement_tanda_"
                                        target="_blank">http://www.advantagefp.in/contact-us/the_advantage_non_disclosure_agreement_tanda_</a>
                                </h3>
                            </div>
                        </div>
                        <div className="form-div">
                            <div className="col-1">
                                <h3 className="hightlight">On boarding of a new client, is at the sole discretion of
                                    Advantage Finacial Planner LLP</h3>
                            </div>
                        </div>
                        <div className="form-div">
                            <div className="col-1">
                                <h3 className="hightlight-2">
                                    <h3 className="highlight">Thankyou.</h3>
                                </h3>
                            </div>
                        </div>
                        <div className="form-div">
                            <div className="col-1">
                                <h3 className="hightlight-2">
                                    <h3 className="highlight">For Advantage Financial Planners LLP (SEBI Registered Investment
                                        Advisor)</h3>
                                </h3>
                            </div>
                        </div>
                        <div className="form-div">
                            <div className="col-1">
                                <h3 className="hightlight-2">
                                    <h3 className="highlight">Taresh Bhatia</h3>
                                </h3>
                            </div>
                        </div>
                        <div className="form-div">
                            <div className="col-1">
                                <h3 className="hightlight-2">
                                    <h3 className="highlight">Principal Officer</h3>
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}
export default Step_4