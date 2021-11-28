
import logo from '../../assets/images/advatage-logo.png';
import './index.css';

const Step_4 = ({handleClick}) => {
    return (
        <main className="step_4">
            <section class="form-section">
                <div class="container-box">
                    <div class="head-section">
                        <img src={logo} />
                    </div>
                    <h1 className="custom-button">Please fill in the following form completely and Submit</h1>
                    <div class="form-tab">
                        <div class="tab-block" id="tab-block">
                            <form>
                                <div class="tab-cont">
                                    <div class="tab-pane" id="step1Box">
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>What is your full name?<sup>*</sup></label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="fullName" name="full_name" placeholder="Full name..."
                                                    required />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>What is your Date of Birth?<sup>*</sup></label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" class="datepicker" id="dateOfBirth" name="dob"
                                                    placeholder="Date of birth" required />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Official Email<sup>*</sup></label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="officialEmail" name="official_email"
                                                    placeholder="Official Email" required />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Personal Email<sup>*</sup></label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="email" name="email" placeholder="Personal Email"
                                                    required />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Mobile No<sup>*</sup></label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="mobile" name="mobile" placeholder="Mobile no." required />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>What is your Spouse name?</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="spouseName" name="spouse_name" placeholder="Spouse name" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>What is the objective of utilising our services. (Please be specific) -
                                                    Are
                                                    you looking at meeting your financial goals, needs and having an investment
                                                    plan
                                                    in place?<sup>*</sup></label>
                                            </div>
                                            <div class="col-6">
                                                <textarea name="moto" id="moto"
                                                    placeholder="What is the objective of utilising our services."
                                                    required></textarea>
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-1">
                                                <label for="">How did you hear about us?</label>
                                                <select id="referal" name="referal" class="referal">
                                                    <option value="Google">Google</option>
                                                    <option value="Facebook">Facebook</option>
                                                    <option value="SMS">SMS</option>
                                                    <option value="Email">Email</option>
                                                    <option value="Friends/Family">Friends/Family</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Where do you work? Please mention company name and address.</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="office" name="office"
                                                    placeholder="Where do you work? Please mention company name and address." />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Profession:</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="profession" name="profession" placeholder="Profession" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Designation:</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="designation" name="designation"
                                                    placeholder="Designation" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Please briefly describe your job designation and profile</label>
                                            </div>
                                            <div class="col-6">
                                                <textarea name="about_designation" id="aboutDesignation"
                                                    placeholder="Please briefly describe your job designation and profile"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Please mention residential address.</label>
                                            </div>
                                            <div class="col-6">
                                                <textarea id="residentialAddress" name="residential_address"
                                                    placeholder="Please mention residential address"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Job Description<sup>*</sup></label>
                                            </div>
                                            <div class="col-6">
                                                <textarea name="job_description" id="jobDescription"
                                                    placeholder="Job Description"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Citizen: ( Your Citizenship) Your current Residence in…</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="citizen" name="citizen" placeholder="Citizen" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Qualification:</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="qualification" name="qualification"
                                                    placeholder="Qualification" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Total Experience:</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="experience" name="experience" placeholder="Experience" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Family Income Sources<sup>*</sup></label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="familyIncomeSource" name="family_income_source"
                                                    placeholder="Income Source" required />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Annual Salary/ Gross Annual Income:(CTC)</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="annualSalary" name="annual_salary"
                                                    placeholder="Annual Salary" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Net take home per month (less of taxes):</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="inHandSalary" name="in_hand_salary"
                                                    placeholder="Net take home per month" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Marital Status<sup>*</sup></label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="maritalStatus" name="marital_status"
                                                    placeholder="Marital Status" required />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Savings currently where?</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="savingOption" name="saving_option"
                                                    placeholder="Savings currently where?" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>How many people are dependent on you financially- Please provide
                                                    relationships if possible. (Eg. wife/ son/ daughter)</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="dependent" name="dependent" placeholder="How many people are dependent on you financially- Please provide
                                                relationships if possible."/>
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Real Estate:(if any) Value and where</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="realEstate" name="real_estate" placeholder="Real Estate" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>All your investments are done in.</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="investments" name="investments"
                                                    placeholder="Investments" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>What is the total value of your investments today:</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="investments_value" name="investments_value"
                                                    placeholder="Investments value" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Loans: (if any) For what and outstanding amount if any</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="loans" name="loans" placeholder="Loans" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Expenses:</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="expenses" name="expenses" placeholder="Expenses" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>What is your total life insurance cover?</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="insurance" name="insurance" placeholder="Insurance" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Family:(if any) and consists of…</label>
                                            </div>
                                            <div class="col-6">
                                                <input type="text" id="family" name="family" placeholder="Family" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-6">
                                                <label>Is your home self-occupied?<sup>*</sup></label>
                                            </div>
                                            <div class="col-6">
                                                <select id="home" name="home">
                                                    <option value="">Is your home self-occupied?</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-1">
                                                <p>Please highlight the financial assets you own(you could highlight more than
                                                    one option, if required.)<sup>*</sup></p>
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-3">
                                                <label>a&#41; Life Insurance Policies</label>
                                                <input type="checkbox" name="financial_assets" value="Life Insurance Policies" />
                                            </div>
                                            <div class="col-3">
                                                <label>b&#41; FDs/RDs</label>
                                                <input type="checkbox" id="fd" name="financial_assets" value="FDs/RDs" />
                                            </div>
                                            <div class="col-3">
                                                <label>a&#41; Mutual Funds</label>
                                                <input type="checkbox" id="mutualFund" name="financial_assets"
                                                    value="Mutual Funds" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-3">
                                                <label>d&#41; Direct Equity</label>
                                                <input type="checkbox" id="directEquity" name="financial_assets"
                                                    value="Direct Equity" />
                                            </div>
                                            <div class="col-3">
                                                <label>e&#41; PMS</label>
                                                <input type="checkbox" id="pms" name="financial_assets" value="PMS" />
                                            </div>
                                            <div class="col-3">
                                                <label>e&#41; PPF</label>
                                                <input type="checkbox" id="ppf" name="financial_assets" value="PPF" />
                                            </div>
                                        </div>
                                        <div class="form-div">
                                            <div class="col-1">
                                                <h3>Challenges: (Issues that you want me to work on) or Your Goals ( This will
                                                    be Scope Of Work)</h3>
                                            </div>
                                            <div class="col-1">
                                                <input type="text" id="point1" placeholder="Point 1." name="point_1" />
                                                <input type="text" id="point2" placeholder="Point 2." name="point_2" />
                                                <input type="text" id="point3" placeholder="Point 3." name="point_3" />
                                                <input type="text" id="point4" placeholder="Point 4." name="point_4" />
                                                <input type="text" id="point5" placeholder="Point 5." name="point_5" />
                                                <input type="text" id="point6" placeholder="Point 6." name="point_6" />
                                                <input type="text" id="point7" placeholder="Point 7." name="point_7" />
                                                <input type="text" id="point8" placeholder="Point 8." name="point_8" />
                                                <input type="text" id="point9" placeholder="Point 9." name="point_9" />
                                                <input type="text" id="point10" placeholder="Point 10." name="point_10" />
                                            </div>
                                        </div>

                                        <div class="form-div">
                                            <div class="col-1">
                                                <p>Questions (Related to your Existing Investments)</p>
                                            </div>
                                            <div class="col-1">
                                                <label for="">1. What is the reason behind existing investments?</label>
                                                <textarea name="" id="reasonExistingInvestments" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div class="col-1">
                                                <label for="">2. Any specific goal for your existing investments?</label>
                                                <textarea name="" id="goalOfExistingInvestments" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div class="col-1">
                                                <label for="">3. What is the time horizon of Existing Investments?</label>
                                                <textarea name="" id="existingInvestments" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div class="col-1">
                                                <label for="">4. What is your Risk profile? (Aggressive or Conservative)</label>
                                                <textarea name="" id="riskProfile" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div class="col-1">
                                                <label for="">5. Does existing investments match with your Risk profile?</label>
                                                <textarea name="" id="investmentsRiskProfile" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div class="col-1">
                                                <label for="">6. Where do you prefer to invest more? (Debt/Equity)</label>
                                                <textarea name="" id="investMore" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div class="col-1">
                                                <label for="">7. Imagine that you have enough money to take care of your needs,
                                                    now and in the
                                                    future. How would you live your life?<br />Would you change
                                                    anything?</label>
                                                <textarea name="" id="careOfNeed" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                            <div class="col-1">
                                                <label for="">8. Imagine your doctor says you have only 5-10 years to live. You
                                                    won’t feel sick,
                                                    but you’ll never know when death will come.<br />What will you do? Will you
                                                    change
                                                    your life? How?</label>
                                                <textarea name="" id="doctorSay" cols="30" rows="10"
                                                    style={{height: "100px"}}></textarea>
                                            </div>
                                        </div>

                                        <div class="form-div">
                                            <a onClick={()=>handleClick()} id="submitFormBtn" class="btn-next">Submit</a>
                                        </div>

                                    </div>
                                </div>

                            </form>
                        </div>
                        <div class="form-div">
                            <div class="col-1">
                                <h3 class="hightlight">Note/Disclaimer: We are asking you the above information for
                                    our understanding
                                    only. This information is strictly confiential and is not viewed or shared by me
                                    with anyone, except me. </h3>
                            </div>
                        </div>
                        <div class="form-div">
                            <div class="col-1">
                                <h3 class="hightlight">However to give you this Non Disclosure Agreement in detail, you can ask
                                    for specific agreement with your name or visit our site for checking out the terms before
                                    you start. To know more about the The Advantage Non-Disclosure Agreement (TANDA) copy 2021,
                                    visit this
                                    link: <a
                                        href="http://www.advantagefp.in/contact-us/the_advantage_non_disclosure_agreement_tanda_"
                                        target="_blank">http://www.advantagefp.in/contact-us/the_advantage_non_disclosure_agreement_tanda_</a>
                                </h3>
                            </div>
                        </div>
                        <div class="form-div">
                            <div class="col-1">
                                <h3 class="hightlight">On boarding of a new client, is at the sole discretion of
                                    Advantage Finacial Planner LLP</h3>
                            </div>
                        </div>
                        <div class="form-div">
                            <div class="col-1">
                                <h3 class="hightlight-2">
                                    <h3 class="highlight">Thankyou.</h3>
                                </h3>
                            </div>
                        </div>
                        <div class="form-div">
                            <div class="col-1">
                                <h3 class="hightlight-2">
                                    <h3 class="highlight">For Advantage Financial Planners LLP (SEBI Registered Investment
                                        Advisor)</h3>
                                </h3>
                            </div>
                        </div>
                        <div class="form-div">
                            <div class="col-1">
                                <h3 class="hightlight-2">
                                    <h3 class="highlight">Taresh Bhatia</h3>
                                </h3>
                            </div>
                        </div>
                        <div class="form-div">
                            <div class="col-1">
                                <h3 class="hightlight-2">
                                    <h3 class="highlight">Principal Officer</h3>
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