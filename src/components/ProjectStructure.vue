<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto text-left">
        <h2>โครงสร้างของโปรเจค Vue.js</h2>
        <p>เมื่อคุณสร้างโปรเจค Vue.js ด้วย Vue CLI จะมีโครงสร้างโปรเจคที่ถูกตั้งค่าไว้ล่วงหน้าเพื่อให้การพัฒนาแอปพลิเคชันมีความสะดวกและมีระเบียบมากขึ้น</p>
        <h5>โครงสร้างของไฟล์ในโปรเจค Vue.js</h5>
        <p>โครงสร้างของโปรเจค Vue.js ที่สร้างจาก Vue CLI มีลักษณะดังนี้</p>
        <div>
          <img src="@/assets/ProjectStructure/project-structure.png" alt="โครงสร้างของโปรเจค">
        </div>        
        <h5>รายละเอียดของและโครงสร้างไฟล์หลัก</h5>
        <h5>1. node_modules</h5>
        <p>เป็นโฟลเดอร์ที่ถูกสร้างขึ้นเมื่อรันคำสั่ง npm install หรือ yarn install ในโปรเจกต์ที่ใช้ Node.js และแพ็กเกจเมเนเจอร์ (npm หรือ yarn) โดยมีหน้าที่หลักดังนี้:</p>
        <li><strong>เก็บไลบรารีและแพ็กเกจที่ติดตั้ง :</strong> เมื่อใช้คำสั่ง npm install package-name หรือ yarn add package-name ระบบจะดาวน์โหลดแพ็กเกจจาก npm registry และจัดเก็บไว้ในโฟลเดอร์ node_modules เพื่อให้สามารถนำมาใช้งานในโปรเจกต์ได้</li>
        <li><strong>แคชแพ็กเกจที่ดาวน์โหลดมา :</strong> โฟลเดอร์ node_modules ช่วยให้โค้ดสามารถเรียกใช้ไลบรารีที่จำเป็นได้อย่างรวดเร็วโดยไม่ต้องดาวน์โหลดใหม่ทุกครั้ง</li>
        <li><strong>จัดการ Dependency และ Sub-dependency :</strong> แพ็กเกจที่เราติดตั้งอาจมีแพ็กเกจอื่นเป็น Dependency (เรียกว่า Sub-dependency) ซึ่งทั้งหมดจะถูกติดตั้งและเก็บไว้ใน node_modules ทำให้โปรเจกต์ทำงานได้โดยไม่มีปัญหาการขาดไลบรารีที่จำเป็น</li>
        <div>
          <img src="@/assets/ProjectStructure/node_modules.png" alt="node_modules">
        </div>
        <h5>2. public</h5>
        <p>โฟลเดอร์ที่เก็บไฟล์ของทุกแพ็กเกจ ที่โปรเจกต์ของคุณต้องใช้ ซึ่งติดตั้งมาผ่าน npm install หรือ yarn install</p>
        <div>
          <img src="@/assets/ProjectStructure/public.png" alt="public">
        </div>
        <p>public/ใช้ทำอะไร?</p>
        <p>เก็บไฟล์ที่ ไม่ต้องการให้ Webpack ประมวลผล เช่น:</p>
        <ul><li><strong>index.html:</strong> (แม่แบบ HTML หลักของ Vue)</li></ul>
        <ul><li><strong>favicon.ico:</strong> (ไอคอนของเว็บ)</li></ul>
        <ul><li>รูปภาพ, ไฟล์<strong>.pdf, .txt</strong> ที่ต้องการเข้าถึงผ่าน URL</li></ul>
        <h5>3. src</h5>
        <p>โฟลเดอร์ src เป็นที่เก็บไฟล์หลักของแอปพลิเคชัน Vue.js ของคุณ ซึ่งประกอบด้วยไฟล์ดังต่อไปนี้</p>
        <div>
          <img src="@/assets/ProjectStructure/src.png" alt="src">
        </div>
        <ul>
          <li><strong>assets : </strong>เก็บไฟล์ที่ไม่ใช่โค้ดเช่น รูปภาพ, ไฟล์ CSS, ฟอนต์ ฯลฯ</li>
          <li><strong>components : </strong>โฟลเดอร์นี้เก็บไฟล์ Vue components ซึ่งแต่ละคอมโพเนนต์จะรับผิดชอบการแสดงผลของส่วนต่างๆ ของแอปพลิเคชัน</li>
          <li><strong>App.vue : </strong>คอมโพเนนต์หลักของแอปพลิเคชัน ซึ่งจะเป็นคอมโพเนนต์เริ่มต้นที่แสดงใน <strong style="color: orange;">index.html</strong></li>
          <li><strong>main.js : </strong>เป็นไฟล์ที่กำหนดจุดเริ่มต้นของโปรเจกต์ Vue โดยจะทำการเชื่อมต่อ Vue instance เข้ากับ element ใน <strong style="color: orange;">index.html</strong></li>
        </ul>
        <p><strong style="color: black;">รายละเอียดย่อยในโฟลเดอร์ scr</strong></p>
        <p><strong style="color: black;">3.1 assets</strong></p>
        <div>
          <img src="@/assets/ProjectStructure/assets.png" alt="assets">
        </div>
        <p style="text-indent: 70px;">เก็บไฟล์ที่ไม่ใช่โค้ด เช่น รูปภาพ, ฟอนต์, ไฟล์ CSS หรือสไตล์ที่ใช้ในโปรเจค</p>
        <p><strong style="color: black;">3.2 components</strong></p>
        <div>
          <img src="@/assets/ProjectStructure/components.png" alt="">
        </div>
        <p style="text-indent: 70px;">โฟลเดอร์นี้ใช้เก็บ Vue components ซึ่งแต่ละ component จะรับผิดชอบการแสดงผล UI บางส่วนของแอปพลิเคชัน</p>
        <h5>4. package.json</h5>
        <p>ไฟล์นี้จะเก็บข้อมูลสำคัญของโปรเจค เช่น ข้อมูลของ dependencies ที่โปรเจคต้องการ, สคริปต์ที่สามารถรันได้ และข้อมูลเกี่ยวกับการตั้งค่าอื่นๆ</p>
        <div>
          <img src="@/assets/ProjectStructure/package.json.png" alt="package.json">
        </div>
        <h5>5. babel.config.js</h5>
        <p>ไฟล์นี้เก็บการตั้งค่าของ Babel ซึ่งใช้ในการแปลง JavaScript จากรูปแบบ ES6 หรือ ES7 ให้สามารถทำงานในเบราว์เซอร์ที่รองรับ JavaScript รุ่นเก่าได้</p>
        <div>
          <img src="@/assets/ProjectStructure/babel.config.js.png" alt="babel.config.js">
        </div>
        <h5>6. vue.config.js</h5>
        <p>ไฟล์นี้ใช้สำหรับการตั้งค่าคอนฟิกเฉพาะของ Vue CLI เช่น การตั้งค่าเกี่ยวกับการปรับแต่งการ build หรือการตั้งค่า proxy server</p>
        <div>
          <img src="@/assets/ProjectStructure/vue.config.js.png" alt="vue.config.js">
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-6 d-flex justify-content-start"><router-link to="/InstallationComponent" class="btn btn-success">ย้อนกลับ</router-link></div>
        <div class="col-6 d-flex justify-content-end"><router-link to="/BasicPage" class="btn btn-success">ต่อไป</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default {
  name: "ProjectStructure"
};
</script>

<style scoped>
div {
  text-align: center;
  margin-top: 20px;
}
pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}
code {
  font-size: 1.1em;
}
h2 {
  margin-top: 20px;
}
h3 {
  margin-top: 15px;
}
ul {
  text-align: left;
  margin-left: 20px;
}
img {
  margin-top: 20px;
  max-width: 100%;
  height: auto;
}

/* สไตล์สำหรับปุ่ม */
.btn{
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
}
</style>
