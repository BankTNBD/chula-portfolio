"use client";

import classNames from "./page.module.css";

import { Grid2, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Frame from "@/Components/Frame";
import TabSpace from "@/Components/TabSpace";

export default function Home() {
  return (
    <div className={classNames.page}>
      <Grid2 container columns={{ xs: 12, sm: 12, md: 12 }} spacing={1} marginTop={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <Frame title="ประวัติส่วนตัว" id="profile" header />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <Frame title="ข้อมูลส่วนตัว" id="info">
            <div style={{ padding: '5px' }}>
              <p><b>ชื่อ-นามสกุล: </b>ธนบดี เตชะกสิวัฒนา</p>
              <p><b>ชื่อเล่น: </b>แบงก์</p>
              <p><b>เพศ: </b>ชาย</p>
              <p><b>วันเกิด: </b>10 พฤษภาคม 2550</p>
              <p><b>อายุ: </b>17 ปี</p>
              <p><b>สัญชาติ: </b>ไทย</p>
              <p><b>ศาสนา: </b>-</p>
            </div>
          </Frame>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
          <Frame title="ติดต่อ" id="contact">
            <div style={{ padding: '5px' }}>
              <p><b>อีเมล: </b>bankthanabadee2007@gmail.com</p>
              <p><b>GitHub: </b>@BankTNBD</p>
              <p><b>Website: </b>linktree.iambanky.com</p>
            </div>
          </Frame>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
          <Frame title="ผลการเรียน" id="gpax">
            <div style={{ padding: '5px', textAlign: 'center' }}>
              <h1>GPAX: 4.00</h1>
              <h3>มัธยมศึกษาตอนปลาย (5 เทอม)</h3>
            </div>
          </Frame>
        </Grid2>
      </Grid2>

      <Grid2 container columns={{ xs: 12, sm: 12, md: 12 }} spacing={1} marginTop={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <Frame title="Statement Of Purpose" header id="sop" />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <Frame>
            <div style={{ padding: '5px' }}>
              <p>
                <TabSpace />
                ตั้งแต่ช่วงประถมศึกษาปีที่ 5 ผมเริ่มมีความสนใจในด้านการเขียนโปรแกรม โดยจุดเริ่มต้นของผมมาจากการใช้โปรแกรม Flowgorithm ในการสร้าง Flowchart ซึ่งทำให้ผมเข้าใจการคิดอย่างเป็นระบบและลำดับขั้น และผมรู้สึกภูมิใจทุกครั้งที่สามารถถ่ายทอดความคิดของตนเองออกมาเป็น Flowchart ได้สำเร็จ หลังจากนั้น ผมได้ขยับเข้าสู่การพัฒนาเว็บไซต์ โดยใช้ HTML, CSS และ JavaScript ซึ่งเป็นการเรียนรู้ที่น่าตื่นเต้นและท้าทาย ผมยังได้ต่อยอดไปใช้ Frontend Framework อย่าง React.js และ Vue.js รวมถึง Backend Framework อย่าง Express.js และ Next.js เพื่อสร้างเว็บแอปพลิเคชันต่างๆ
                <TabSpace br />
                จุดเปลี่ยนสำคัญของผมเกิดขึ้นเมื่อได้เข้าร่วมค่ายโอลิมปิกวิชาการ สอวน. ในสาขาคอมพิวเตอร์ ซึ่งผมได้เรียนรู้ภาษา C และ C++ และเจาะลึกไปในด้านอัลกอริทึมและโครงสร้างข้อมูล ตั้งแต่โครงสร้างที่ไม่ซับซ้อนมาก เช่น Array ไปจนถึงโครงสร้างที่ซับซ้อนอย่าง Graph และ Tree อีกทั้งค่ายนี้ยังเปิดโอกาสให้ผมได้พบกับเพื่อนที่มีความสนใจคล้ายกัน และได้เรียนรู้เทคนิคในการเขียนโปรแกรมผ่านการทำกิจกรรมร่วมกัน ผมรู้สึกสนุกและท้าทายทุกครั้งที่สามารถแก้ไขโปรแกรมที่ซับซ้อนได้ หรือแม้กระทั่งแก้ไข Bugs และ Errors ซึ่งเป็นสิ่งที่ช่วยพัฒนาทักษะการคิดอย่างเป็นระบบของผมอย่างต่อเนื่อง
                <TabSpace br />
                ผมเชื่อมั่นว่าการศึกษาต่อในคณะวิศวกรรมศาสตร์ สาขาวิชาวิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล (CEDT) จุฬาลงกรณ์มหาวิทยาลัย จะเป็นก้าวสำคัญในการสานฝันของผมสู่การเป็นวิศวกรคอมพิวเตอร์ที่มีความเชี่ยวชาญและมีความรู้ลึกซึ้ง ผมมีความตั้งใจที่จะศึกษาต่อในระดับปริญญาโทและปริญญาเอก และหากได้รับการคัดเลือกเข้าศึกษาต่อ ผมมีโครงการที่อยากจะพัฒนาหลากหลาย ไม่ว่าจะเป็นแอปพลิเคชันเพื่อสังคม เช่น แอปพลิเคชันที่ใช้ AI ในการช่วยวินิจฉัยโรคผิวหนัง หรือพัฒนาเกมเพื่อการเรียนรู้ เช่น เกมการ์ดที่ใช้คณิตศาสตร์เป็นพื้นฐานในการเล่น นอกจากนี้ ผมยังอยากจัดการแข่งขันเขียนโปรแกรมคอมพิวเตอร์เพื่อกระตุ้นและพัฒนาวงการคอมพิวเตอร์ในประเทศไทย รวมถึงริเริ่มงานวิจัยที่เกี่ยวข้องกับวิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล เพื่อต่อยอดความรู้ในด้านนี้
                <TabSpace br />
                ในอนาคตหลังจากสำเร็จการศึกษา ผมมุ่งหวังที่จะทำงานในสายอาชีพที่เกี่ยวข้องกับวิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล เช่น Software Developer, Software Engineer, Network Engineer, IT Administrator, Data Scientist หรือตำแหน่งที่เกี่ยวข้องกับระบบคอมพิวเตอร์ ผมเชื่อว่าการได้ทำงานในสิ่งที่รักและมีความถนัดจะทำให้ผมสามารถทุ่มเทกับงานได้อย่างเต็มที่ และยังสามารถสร้างสรรค์นวัตกรรมที่เป็นประโยชน์ต่อสังคม อีกทั้งผมต้องการมีส่วนร่วมในการพัฒนาวงการวิศวกรรมคอมพิวเตอร์ของประเทศไทย ด้วยองค์ความรู้ที่ได้รับจากการศึกษาที่จุฬาลงกรณ์มหาวิทยาลัย
              </p>
            </div>
          </Frame>
        </Grid2>
      </Grid2>

      <Grid2 container columns={{ xs: 12, sm: 12, md: 12 }} spacing={1} marginTop={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <Frame title="ผลงานและรางวัล" header id="achievement"/>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Frame title="ค่ายโอลิมปิกวิชาการ" id="posn">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/preview/POSN.jpeg`}
                    alt={"โอลิมปิกวิชาการ"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <p><TabSpace />การเข้าร่วมค่ายโอลิมปิกวิชาการ สอวน. ในสาขาวิชาคอมพิวเตอร์ เป็นโอกาสที่ดีที่ได้เรียนรู้ทักษะกระบวนการคิดเชิงตรรกะอย่างเป็นขั้นตอน การออกแบบและสร้าง Flowchart เพื่อสื่อสารลำดับขั้นของการทำงาน และการเขียนโปรแกรมด้วยภาษาต่างๆ เช่น C และ C++ นอกจากนี้ ยังได้ศึกษา อัลกอริทึมทางคอมพิวเตอร์ ที่สำคัญ เช่น Binary Search, Merge Sort, Decision Tree, BFS, DFS และ Dijkstra’s Algorithm รวมไปถึงการจัดการกับ โครงสร้างข้อมูล ต่าง ๆ อย่าง Array, Linked List, Stack, Queue, Tree, และ Graph</p>
            </div>
          </Frame>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Frame title="NSC2023" id="nsc2023">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/preview/NSC.jpeg`}
                    alt={"NSC2023"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <p>
                <TabSpace />ผมได้เข้าร่วมการแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยครั้งที่ 25 (The 25th National Software Contest: NSC 2023) ในประเภทโปรแกรมเพื่อความบันเทิงระดับนักเรียน โดยเลือกพัฒนาเกมคอมพิวเตอร์ในชื่อ “ช่วงเวลาพิเศษในเทศกาลพิเศษ” ซึ่งเป็นเกมที่มีคอนเซ็ปต์เกี่ยวกับงานวัดของไทย โดยผู้เล่นจะได้สวมบทบาทเป็นตัวละครในเกม ซึ่งเสมือนกับการเดินอยู่ในงานวัด ที่มีซุ้มเกมต่างๆ เช่น ป่าโป่ง, ยิงตุ๊กตา, บิงโก เป็นต้น
                <TabSpace br />เกม “ช่วงเวลาพิเศษในเทศกาลพิเศษ” เป็นเกม 2D แบบ Single Player ที่ผมและทีมงานเห็นว่า นอกจากจะมอบความบันเทิงให้กับผู้เล่นแล้ว ยังช่วยสืบสานและเผยแพร่วัฒนธรรมไทยสู่สากลได้อีกด้วย
                <TabSpace br />แม้ว่าเกมนี้จะไม่ได้ผ่านเข้าสู่รอบชิงชนะเลิศ แต่ผลงานยังได้รับทุนสนับสนุนจำนวน 10,000 บาท และเป็นก้าวสำคัญในการเรียนรู้กระบวนการพัฒนาเกมคอมพิวเตอร์ การใช้งาน Game Engine เช่น Unity, การเขียนโปรแกรมด้วยภาษา C#, รวมถึงการทำงานเป็นทีมที่ต้องการทั้งความสามัคคีและภาวะความเป็นผู้นำ และยังได้เรียนรู้การออกแบบเกมคอมพิวเตอร์อีกด้วย
              </p>
            </div>
          </Frame>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Frame title="ศิลปหัตถกรรมนักเรียน" id="sillapa">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/preview/Sillapa.jpeg`}
                    alt={"ศิลปหัตถกรรมนักเรียน"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <p>
                <TabSpace />ผมได้มีโอกาสเข้าร่วมการแข่งขันศิลปหัตถกรรมนักเรียนครั้งแรกในช่วงมัธยมศึกษาปีที่ 4 ซึ่งในครั้งนั้นผมได้รับรางวัลเหรียญทอง ชนะเลิศ ในการแข่งขันการเขียนโปรแกรมด้วยภาษาคอมพิวเตอร์ ระดับชั้น ม.4 - ม.6 ของระดับพื้นที่การศึกษาครั้งที่ 70 ปีการศึกษา 2565 รางวัลนี้ทำให้ผมได้รับโอกาสในการเข้าร่วมการแข่งขันในระดับชาติในรายการเดียวกัน
                <TabSpace br />แม้ว่าผมจะได้รับเพียงรางวัลเข้าร่วมในระดับชาติ แต่ประสบการณ์ที่ได้จากการแข่งขันครั้งนั้นก็มีคุณค่ามากมาย ผมได้เรียนรู้การรับมือกับความตื่นเต้นและความกดดันในสภาพแวดล้อมของการแข่งขันระดับชาติ นอกจากนี้ยังได้ค้นพบเครื่องมือและเทคนิคใหม่ๆ ที่ช่วยให้การเขียนโปรแกรมมีประสิทธิภาพมากขึ้น เช่น การใช้ Library ในภาษา C++ ที่ช่วยเพิ่มความสะดวกและความรวดเร็วในการพัฒนาโปรแกรม รวมถึงการศึกษาหลักการและแนวคิดในการออกแบบ Algorithm ที่มีประสิทธิภาพมากขึ้น
                <TabSpace br />ในปีการศึกษา 2566 ผมมีโอกาสกลับมาร่วมแข่งขันในรายการเดิมอีกครั้ง โดยนำประสบการณ์และความรู้ที่ได้จากการแข่งขันครั้งก่อนมาปรับใช้ในการพัฒนาฝีมือและกลยุทธ์ใหม่ๆ ซึ่งผลลัพธ์คือการได้รับรางวัลเหรียญทอง ชนะเลิศอีกครั้ง ในครั้งนี้ผมไม่เพียงได้รับรางวัล แต่ยังได้ประสบการณ์เพิ่มเติมที่มีคุณค่ามากยิ่งขึ้นในการพัฒนาทักษะการเขียนโปรแกรมและการเตรียมตัวในการแข่งขันระดับสูงต่อไป
              </p>
            </div>
          </Frame>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Frame title="กิจกรรมอื่นๆ" >
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/cert/46ict.png`}
                    alt={"46ict"}
                    loading="lazy"
                  />
                </ImageListItem>
                <ImageListItemBar
                  title="รางวัลระดับเหรียญเงิน"
                  subtitle="การแข่งขันมหกรรมวิชาการ กลุ่มโรงเรียนผู้นำ 46ict"
                  position="below"
                />
              </ImageList>
            </div>
          </Frame>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Frame title="กิจกรรมอื่นๆ">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/cert/KMITL-IOT.png`}
                    alt={"KMITL"}
                    loading="lazy"
                  />
                </ImageListItem>
                <ImageListItemBar
                  title="เข้าร่วมกิจกรรม Workshop"
                  subtitle="ระบบไอโอทีเบื้องต้นด้วย Arduino IoT งาน K-Engineering World Tour Workshop 2024"
                  position="below"
                />
              </ImageList>
            </div>
          </Frame>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
          <Frame title="กิจกรรมอื่นๆ">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/cert/แข่งขันเขียนโปรแกรมคอมพิวเตอร์.jpg`}
                    alt={"programming"}
                    loading="lazy"
                  />
                </ImageListItem>
                <ImageListItemBar
                  title="รางวัลชมเชย การแข่งเขียนโปรแกรมคอมพิวเตอร์"
                  subtitle="งานสัปดาห์วิทยาศาสตร์ มหาวิทยาลัยศิลปากร"
                  position="below"
                />
              </ImageList>
            </div>
          </Frame>
        </Grid2>
      </Grid2>

      <Grid2 container columns={{ xs: 12, sm: 12, md: 12 }} spacing={1} marginTop={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <Frame title="กิจกรรมวิชาการ" header id=""academicactivity/>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <Frame title="">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/cert/ChemChallenge12.jpg`}
                    alt={"Chem Challenge 12 Chula"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
            </div>
          </Frame>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <Frame title="">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/cert/UTCC.png`}
                    alt={"UTCC Digital Challenge 2024"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
            </div>
          </Frame>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <Frame title="">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/cert/สร้างชื่อเสียง4.jpg`}
                    alt={"สร้างชื่อเสียงมาสู๋โรงเรียน"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
            </div>
          </Frame>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <Frame title="">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/cert/สร้างชื่อเสียง5.jpg`}
                    alt={"สร้างชื่อเสียงมาสู่โรงเรียน"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
            </div>
          </Frame>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <Frame title="">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/cert/การแข่งขันอ่านออกเสียงร้อยแก้ว.jpg`}
                    alt={"การแข่งขันอ่านออกเสียงร้อยแก้ว"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
            </div>
          </Frame>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <Frame title="">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/cert/Bordin.png`}
                    alt={"Bordin"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
            </div>
          </Frame>
          </Grid2>
      </Grid2>

      <Grid2 container columns={{ xs: 12, sm: 12, md: 12 }} spacing={1} marginTop={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <Frame title="กิจกรรมจิตอาสา" header id="voluntaryactivity" />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
          <Frame title="มอบความรู้และปันความสุขเพื่อน้อง">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/preview/มอบความรู้.png`}
                    alt={"มอบความรู้และปันความสุขเพื่อน้อง"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <p>
                <b>กิจกรรมมอบความรู้และปันความสุขเพื่อน้อง ณ โรงเรียนวัดโคกโคเฒ่า</b>
                <TabSpace br />ในวันที่ 10 กันยายน พ.ศ. 2567 นักเรียนชั้นมัธยมศึกษาปีที่ 6 จากโรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี ได้จัดกิจกรรมค่าย "มอบความรู้และปันความสุขเพื่อน้อง" ให้กับนักเรียนชั้นประถมศึกษาปีที่ 1-3 ณ โรงเรียนวัดโคกโคเฒ่า จังหวัดสุพรรณบุรี ซึ่งกิจกรรมในค่ายนี้ประกอบไปด้วยหลากหลายกิจกรรมที่ทั้งสนุกและมีสาระ เช่น กิจกรรมนันทนาการที่ช่วยเสริมสร้างทักษะการทำงานเป็นทีมและความคิดสร้างสรรค์, การมอบความรู้ในรูปแบบที่สนุกสนาน เพื่อกระตุ้นให้น้องๆ สนใจเรียนรู้, การแจกอุปกรณ์การเรียน เช่น สมุดและเครื่องเขียน เพื่อสนับสนุนการเรียนของน้องๆ และการเลี้ยงอาหารและขนม
              </p>
            </div>
          </Frame>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
          <Frame title="ปลูกป่า">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/preview/ปลูกป่า.png`}
                    alt={"ปลูกป่า ศูนย์ศึกษาธรรมชาติบางปู"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <p>
                <b>กิจกรรมปลูกป่า ยุวกาชาดระดับ 4 ณ ศูนย์ศึกษาธรรมชาติบางปู</b>
                <TabSpace br />ในวันที่ 29 มกราคม พ.ศ. 2567 ผมได้เข้าร่วมกิจกรรมปลูกป่าของนักเรียนยุวกาชาดระดับ 4 จากโรงเรียนกาญจนาภิเษกวิทยาลัย สุพรรณบุรี ณ ศูนย์ศึกษาธรรมชาติกองทัพบก บางปู ซึ่งเป็นกิจกรรมที่มุ่งเน้นการปลูกต้นไม้เพื่อฟื้นฟูธรรมชาติและสร้างจิตสำนึกในการรักษาสิ่งแวดล้อม
                <TabSpace br />นอกจากการเข้าร่วมกิจกรรมปลูกป่าแล้ว ผมยังได้รับมอบหมายให้ทำหน้าที่ฝ่ายโสตทัศน์ในการเก็บรวบรวมภาพบรรยากาศต่างๆ ภายในกิจกรรม การทำหน้าที่นี้ทำให้ผมได้เรียนรู้ทักษะด้านการถ่ายภาพและการจัดทำสื่อต่างๆ
              </p>
            </div>
          </Frame>
        </Grid2>
      </Grid2>

      <Grid2 container columns={{ xs: 12, sm: 12, md: 12 }} spacing={1} marginTop={2}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
          <Frame title="กิจกรรมอื่นๆ" header id="otheractivity" />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Frame title="ราชพฤกษ์เกมส์ครั้งที่ 25">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/preview/Wichitwong.jpeg`}
                    alt={"ราชพฤกษ์เกมส์"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <p>
                <b>เป็นผู้ดูแลงานกิจกรรมกีฬาภายใน ราชพฤกษ์เกมส์ครั้งที่ 25</b>
                <TabSpace br />ทำหน้าที่ดูแลงานด้านข้อมูลสารสนเทศและถ่ายภาพกิจกรรมในสีวิชิตวงศ์วุฒิไกร (สีฟ้า) งานกีฬาภายใน (ราชพฤกษ์เกมส์ครั้งที่ 25) ปีการศึกษา 2566
              </p>
            </div>
          </Frame>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Frame title="ตัวแทนตอบคำถาม">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/preview/KPSP.jpeg`}
                    alt={"KPSP"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <p>
                <b>เป็นตัวแทนในการตอบคำถามการประเมินภายนอก ภายใต้กรอบแนวทางการประกันคุณภาพภายนอก</b>
                <TabSpace br />ได้รับคัดเลือกเป็นตัวแทนในการตอบคำถามการประเมินภายนอก ภายใต้กรอบแนวทางการประกันคุณภาพภายนอกปี 2567-2571 โรงเรียนภาญจนาภิเษกวิทยาลัย สุพรรณบุรี วันที่ 11 กรกฎาคม พ.ศ. 2567
              </p>
            </div>
          </Frame>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Frame title="สิ่งประดิษฐ์">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/preview/PeepPeep.jpeg`}
                    alt={"เครื่องตรวจจับควันไฟ"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <p>
                <b>เครื่องตรวจจับควันไฟ และแจ้งเตือนผ่านโทรศัพท์มือถือ (ปี๊บปี๊บช่วยชีวิต)</b>
                <TabSpace br />แจ้งเตือนผ่านโทรศัพท์มือถือ ด้วย Line Notify API
              </p>
            </div>
          </Frame>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Frame title="สิ่งประดิษฐ์">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/preview/Raspi.jpeg`}
                    alt={"เครื่องไล่นกอัตโนมัติ"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <p>
                <b>เครื่องไล่นกอัตโนมัติด้วยเสียง</b>
                <TabSpace br />เครื่องไล่นกอัตโนมัติจาก Raspberry Pi 4 และ PIR senor
              </p>
            </div>
          </Frame>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
          <Frame title="ตัวแทนถือพาน">
            <div style={{ padding: '5px' }}>
              <ImageList sx={{ width: "100%", height: "auto" }} cols={1} >
                <ImageListItem>
                  <img
                    src={`/assets/images/preview/KPSP1.jpeg`}
                    alt={"ถือพาน"}
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
              <p>
                <b>ตัวแทนถือพานในพิธีไหว้ครู ชั้นมัธยมศึกษาปีที่ 6/4 ปีการศึกษา 2565</b>
              </p>
            </div>
          </Frame>
        </Grid2>
      </Grid2>
    </div >
  );
}
