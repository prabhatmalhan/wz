function calper(x) {
  attended = document.querySelector("#row" + x + " " + ".attended").textContent;
  delivered = document.querySelector(
    "#row" + x + " " + ".delivered"
  ).textContent;
  a = parseInt(attended);
  d = parseInt(delivered);
  res = "";
  if (!(isNaN(a) || isNaN(d)) && a <= d) {
    res = Math.trunc((a / d) * 10000) / 100 + " %";
  }
  document.querySelector("#row" + x + " " + ".res").textContent = res;
}

function fillsubject(subjects) {
  if (subjects == null) {
    for (let i = 0; i < 6; i++)
      document.querySelector("#row" + (i + 1) + " .title").innerHTML = `
        <div
          class="text_input"
          contenteditable="true"
          style="width:97%;text-align: center;"
        ></div>`;
  } else {
    for (let i = 0; i < 6; i++)
      document.querySelector("#row" + (i + 1) + " .title").textContent =
        subjects[i];
  }
}

function addHtml() {
  document.getElementsByTagName(
    "body"
  )[0].innerHTML = `<div id=page><div id="heading">
        <div id="head">

            <img src="../nitj.png" id="icon" alt="nitj.png" height="67px" width="67px">
            <h1 class="hindi">
                डा. बी आर अम्बेदकर राष्ट्रीय प्रौद्योगिकी संस्थान, जालन्धर
            </h1>
        </div>
        <h4 style="margin-bottom: 15px;margin-top: -10px">Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR
        </h4>
    </div>
    <div class="container">
        <div id="grid-container" style="display: grid;column-gap:0;row-gap: 0;">
            <div class=" indiv" style="font-weight: bold;display: inline;grid-column: 1/2;text-align: left;">
                Ref. No…………………
            </div>
            <div class=" indiv" style="font-weight: bold;display: inline;grid-column: 2/3;text-align: right;padding-right: 2.5%">
                Date…………………
            </div>
        </div>

        <h4 style="text-align: center;margin-top: 5px;margin-bottom: 10px;">Monthly Progress Report of M Tech Students
        </h4>

        <div class="indiv">
            1. Name of the Student -
            <div class="text_input" contenteditable="true" style="width: 19.7%;"></div>
            Roll No. -
            <div class="text_input" contenteditable="true" style="width: 10.97%;"></div>
            Department -
            <div class="text_input" contenteditable="true" style="width: 28%;"></div>
        </div>

        <div class="indiv">
            2. Son of -
            <div class="text_input" contenteditable="true" style="width: 29.5%;"></div>
            Semester -
            <div class="text_input" contenteditable="true" style="width: 10%;"></div>
        </div>

        <div class="indiv">
            3. Mobile No -
            <div class="text_input" contenteditable="true" style="width: 26.5%"></div>
            Email -
            <div class="text_input" contenteditable="true" style="min-width: 25.5%;max-width: 40%;"></div>
        </div>

        <div class="indiv">
            4. Period from
            <div class="text_input_underline" contenteditable="true"
                style="width: 19.4%;margin-left: 5px;margin-right: 5px;text-align: center;"></div>
            to
            <div class="text_input_underline" contenteditable="true"
                style="width: 19.4%;margin-left: 5px;margin-right: 5px;text-align: center;"></div>
            Month and Year
            <div class="text_input_underline" contenteditable="true"
                style="width: 17.5%;margin-left: 5px;margin-right: 5px;text-align: center;"></div>
        </div>

        <div class="indiv">
            5.
            Email of Student -
            <div class="text_input" contenteditable="true"
                style="min-width: 35%;max-width: 40%;margin-right: 10px;margin-top: 5px">
            </div>
            Mobile No -
            <div class="text_input" contenteditable="true" style="width: 26%;"></div>
        </div>

        <div class="indiv">
            6. Name of Bank -
            <div class="text_input" contenteditable="true" style="min-width: 25%;max-width:30%;margin-right: 1%"></div>
            Account No. -
            <div class="text_input" contenteditable="true" style="width: 14%;margin-right: 1%;">
            </div>
            IFSC Code -
            <div class="text_input" contenteditable="true" style="width: 11%;">
            </div>
        </div>

        <div class=" indiv"
            style="text-align: right;height: 45px;font-weight: bold;display: flex;align-items: flex-end;flex-direction: column; justify-content: flex-end;padding: 0px 2% 0px 0px;">
            (Signature of Student)</div>
        <div style="font-family: 'Times New Roman', Times, serif;margin-top: -25px;margin-bottom: 5px;">
            <h4 style="margin-bottom: 3px;">
                7. Class Work Performance
            </h4>
            <div>
                <table width="98%">
                    <tr>
                        <th rowspan="2" width="7%">Sr. No</th>
                        <th rowspan="2" width="35%">Subject</th>
                        <th colspan="3" width="37%">Attendence of Lectures</th>
                        <th rowspan="2" width="21%">Signature of the Teacher</th>
                    </tr>
                    <tr>
                        <th width="11%">Delivered</th>
                        <th width="11%">Attended</th>
                        <th>Percent Attendence</th>
                    </tr>
                    <tr id="row1">
                        <td style="text-align: center;"><b>I</b></td>
                        <td class="title"></td>
                        <td>
                            <div class="text_input delivered" contenteditable="true"
                                style="width: 75%;text-align: center;" oninput="calper(1)">
                            </div>
                        </td>
                        <td>
                            <div class=" text_input attended" contenteditable="true"
                                style="width: 75%;text-align: center;" oninput="calper(1)">
                            </div>
                        </td>
                        <td class="res"></td>
                        <td></td>
                    </tr>
                    <tr id="row2">
                        <td style="text-align: center;"><b>II</b></td>
                        <td class="title"></td>
                        <td>
                            <div class="text_input delivered" contenteditable="true"
                                style="width: 75%;text-align: center;" oninput="calper(2)">
                            </div>
                        </td>
                        <td>
                            <div class="text_input attended" contenteditable="true"
                                style="width: 75%;text-align: center;" oninput="calper(2)">
                            </div>
                        </td>
                        <td class="res"></td>
                        <td></td>
                    </tr>
                    <tr id="row3">
                        <td style="text-align: center;"><b>III</b></td>
                        <td class="title"></td>
                        <td>
                            <div class="text_input delivered" contenteditable="true"
                                style="width: 75%;text-align: center;" oninput="calper(3)">
                            </div>
                        </td>
                        <td>
                            <div class="text_input attended" contenteditable="true"
                                style="width: 75%;text-align: center;" oninput="calper(3)">
                            </div>
                        </td>
                        <td class="res"></td>
                        <td></td>
                    </tr>
                    <tr id="row4">
                        <td style="text-align: center;"><b>IV</b></td>
                        <td class="title"></td>
                        <td>
                            <div class="text_input delivered" contenteditable="true"
                                style="width: 75%;text-align: center;" oninput="calper(4)">
                            </div>
                        </td>
                        <td>
                            <div class="text_input attended" contenteditable="true"
                                style="width: 75%;text-align: center;" oninput="calper(4)">
                            </div>
                        </td>
                        <td class="res"></td>
                        <td></td>
                    </tr>
                    <tr id="row5">
                        <td style="text-align: center;"><b>V</b></td>
                        <td class="title"></td>
                        <td>
                            <div class="text_input delivered" contenteditable="true"
                                style="width: 75%;text-align: center;" oninput="calper(5)">
                            </div>
                        </td>
                        <td>
                            <div class="text_input attended" contenteditable="true"
                                style="width: 75%;text-align: center;" oninput="calper(5)">
                            </div>
                        </td>
                        <td class="res"></td>
                        <td></td>
                    </tr>
                    <tr id="row6">
                        <td style="text-align: center;"><b>VI</b></td>
                        <td class="title"></td>
                        <td>
                            <div class="text_input delivered" contenteditable="true"
                                style="width: 75%;text-align: center;" oninput="calper(6)">
                            </div>
                        </td>
                        <td>
                            <div class="text_input attended" contenteditable="true"
                                style="width: 75%;text-align: center;" oninput="calper(6)">
                            </div>
                        </td>
                        <td class="res"></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="indiv" style="margin-bottom: 7px;">
            <div style="font-weight: bold;margin-bottom: 7px;">
                8. Work Load Alloted
                <div class="text_input_underline" contenteditable="true" style="width: 20%;text-align: center;"></div>
                hours/week
            </div>
            <table width="98%">
                <tr>
                    <th width=" 25%">Subject</th>
                    <th width="33%">Name of the Faculty Member</th>
                    <th width="42%">Report of the faculty</th>
                </tr>
                <tr>
                    <td>
                        <div class="text_input" contenteditable="true" style="width:97%;text-align: center;"></div>
                    </td>
                    <td>
                        <div class="text_input" contenteditable="true" style="width:97%;text-align: center;"></div>
                    </td>
                    <td>
                        <div class="text_input" contenteditable="true" style="width:97%;text-align: center;"></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="text_input" contenteditable="true" style="width:97%;text-align: center;"></div>
                    </td>
                    <td>
                        <div class="text_input" contenteditable="true" style="width:97%;text-align: center;"></div>
                    </td>
                    <td>
                        <div class="text_input" contenteditable="true" style="width:97%;text-align: center;"></div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="indiv">
            <div style="font-weight: bold;margin-bottom: 3px;">
                9. Thesis progress
            </div>
            <ol type="a" style="font-weight: normal;margin-top: 2px;">
                <li>
                    Topic of the thesis:
                    <div class="text_input" contenteditable="true"
                        style="min-width: 77%;max-width:82%;text-align: center;"></div>
                </li>
                <li>
                    Name of the Supervisor:
                    <div class="text_input" contenteditable="true"
                        style="min-width: 70%;max-width:78%;text-align: center;"></div>
                </li>
                <li>
                    Progress (mention clearly whether satisfactory or unsatisfactory):
                    <div
                        style="display: inline-block;height:16px;width: 38%;border: solid;border-width: 0px 0px 2px 0px;">
                    </div>
                </li>
            </ol>
        </div>
        <div id="decor_table" class="indiv" style="margin-bottom: 10px">
            <div style="font-weight: bold;">
                10. For Office Use
            </div>
            <table>
                <tr>
                    <td>Leave Record of the RS</td>
                    <td>(a) Total Leave available</td>
                    <td width="125px">
                        : <div
                            style="display: inline-block;font-weight: bold;height:16px;width: 92.5%;border: solid;border-width: 0px 0px 2px 0px;">
                            15 Per Semester
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>(b) Leave availed</td>
                    <td>
                        : <div
                            style="display: inline-block;height:16px;width: 92.5%;border: solid;border-width: 0px 0px 2px 0px;">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>(c) Balance available</td>
                    <td>
                        : <div
                            style="display: inline-block;height:16px;width: 92.5%;border: solid;border-width: 0px 0px 2px 0px;">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>(d) Leave availed in current Month</td>
                    <td>
                        : <div
                            style="display: inline-block;height:16px;width: 92.5%;border: solid;border-width: 0px 0px 2px 0px;">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>(e) Without stipend after availing 15 leaves</td>
                    <td>
                        : <div
                            style="display: inline-block;height:16px;width: 92.5%;border: solid;border-width: 0px 0px 2px 0px;">
                        </div>
                    </td>
                </tr>
            </table>
        </div>

        <div class="indiv">
            11. Entered in the Register Page No…………………Sr. No.……………………………
        </div>
        <div class="indiv" style="margin-top: -13px;margin-bottom: 0;">
            <p style="font-weight: bold;">
                Verified that the particulars mentioned against column Sr. No.1 to 11 are in order as per the record of
                the Department.
            </p>
            <div id="grid-container" style="display: grid;column-gap:0;row-gap: 0;margin-top: 5%;margin-bottom: 0;">
                <div class=" indiv" style="font-weight: bold;display: inline;grid-column: 1/2;text-align: left;">
                    Signature of the Supervisor
                </div>
                <div class=" indiv" style="font-weight: bold;display: inline;grid-column: 2/3;text-align: right;padding-right: 2.5%">
                    Departmental Dealing Hand
                </div>
            </div>
            <div id="grid-container" style="display: grid;column-gap:0;row-gap: 0;margin-top: 5%;margin-bottom: 0;">
                <div class=" indiv" style="font-weight: bold;display: inline;grid-column: 1/2;text-align: left;">
                    Signature of the M Tech Coordinator
                </div>
                <div class=" indiv" style="font-weight: bold;display: inline;grid-column: 2/3;text-align: right;padding-right: 2.5%">
                    Signature of HOD
                </div>
            </div>

            <div style="margin-top: 5%;margin-bottom: 0;">
                <div class="indiv" style="font-weight: bold;">
                    AR (Accounts)
                </div>
            </div>
        </div>
    </div>
    </div>
    <div id="print" style="text-align: center;">
        <button onclick="print()" style="width: 100px; height: 30px;font-size: medium;">Print</button>
    </div>
`;
}
