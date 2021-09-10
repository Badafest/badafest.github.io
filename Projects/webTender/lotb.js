const LOTB_STRING_JV = '<article > <section id="title">Letter of Technical Bid</section> <section id="topRightText"> <p>Date: <span>DATE</span></p> <p>Name of the Contract: <span>FULL_CONTRACT_NAME</span></p> <p>Invitation for Bid No.: <span>INVITATION_BID_NO</span></p> <p>Contract Identification No.: <span >CONTRACT_ID_NO</span></p> </section> <section id="toPart"> <p >To:</p> <span > TO_TEXT </span> </section> <section  id="mainContent"> <p >We, the undersigned, declare that:</p> <ol type="a"> <li>We have examined and have no reservations to the Bidding Documents, including Addenda issued in accordance with Instructions to Bidders (ITB) Clause8.</li> <li>We offer to execute in conformity with the Bidding Documents the following Works:<br><span>CONTRACT_ID_NO</span></li> <li>Our Bid consisting of the Technical Bid and the Price Bid shall be valid for a period of <span>BID_VAL_PERIOD</span> from the date fixed for the bid submission deadline in accordance with the Bidding Documents, and it shall remain binding upon us and may be accepted at any time before the expiration of that period.</li><li>Our firm, including any subcontractors or suppliers for any part of the Contract, have nationalities from eligible countries in accordance with ITB 4.2 and meet the requirements of ITB 3.4, & 3.5</li> <li>We are not participating, as a Bidder or as a subcontractor, in more than one Bid in this bidding process in accordance with ITB 4.3(e), other than alternative offers submitted in accordance with ITB 13.</li> <li>Our firm, its affiliates or subsidiaries, including any Subcontractors or Suppliers for any part of the contract, has not been declared ineligible by DP, under the Employers country laws or official regulations or by an act of compliance with a decision of the United Nations Security Council;</li> <li>We are not a government owned entity/We are a government owned entity but meet the requirements of ITB 4.5;</li> <li>We declare that, we including any subcontractors or suppliers for any part of the contract do not have any conflict of interest in accordance with ITB 4.3 and we have not been punished for an offense relating to the concerned profession or business.</li> <li>We declare that we are solely responsible for the authenticity of the documents submitted by us. The document and information submitted by us are true and correct. If any document/information given is found to be concealed at a later date, we shall accept any legal actions by the Employer.</li> <li>We agree to permit the Employer/DP or its representative to inspect our accounts and records and other documents relating to the bid submission and to have them audited by auditors appointed by the Employer.</li> <li>If our Bid is accepted, we commit to mobilizing key equipment and personnel in accordance with the requirements set forth in Section III (Evaluation and Qualification Criteria) and our technical proposal, or as otherwise agreed with the Employer.</li> <li>We are committed to submit the Letter of Commitment for Banks Undertaking for Line of Credit of <span>LOC</span> at the time of contract agreement, if the bid is awarded to us.</li></ol> </section> <section id="bottomLeftText"> <p >Name: <span >AP</span></p> <p >In the Capacity of <span >Authorized JV Partner</span></p> <br><br> <p >Signed: <span >............</span></p> <p >Duly authorized to sign for and on behalf of <span >JV_NAME</span></p> <p >Date: <span >DATE</span></p> </section> </article>'

getLotb = (formJSON)=> LOTB_STRING_JV
		.replaceAll('DATE',formJSON.date)
		.replaceAll('FULL_CONTRACT_NAME',formJSON.contractName)
		.replaceAll('INVITATION_BID_NO',formJSON.bidNo)
		.replaceAll('CONTRACT_ID_NO',formJSON.contractId)
		.replaceAll('TO_TEXT',formJSON.to)
		.replaceAll('BID_VAL_PERIOD',formJSON.bidVal)
		.replaceAll('AP',formJSON.authorized)
		.replaceAll('JV_NAME',formJSON.firmName)
		.replaceAll('LOC',formJSON.lineOfCredit)
		.replaceAll('*','<br>')
