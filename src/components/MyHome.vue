<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto text-left">
        <h2>Vue.js เบื้องต้น</h2><hr>
        <img src="@/assets/vue1.png" alt="Vue.js Logo">
        <h4>Vue.js คืออะไร</h4>
        <p class="text-indent"><span> Vue.js เป็น framework JavaScript ที่ใช้สำหรับสร้าง UI และ Single Page Applications (SPA) โดยเน้นการทำงานที่ง่ายและยืดหยุ่นและได้รับความนิยมจากนักพัฒนาเว็บมากขึ้นเรื่อยๆ</span>
        <span>Vue.js ถูกพัฒนาโดย <strong>Evan You</strong> นักพัฒนาเว็บชาวจีนที่เคยทำงานที่ Google ก่อนจะตัดสินใจสร้าง Vue.js ขึ้นมาในปี 2014 หลังจากนั้น Vue.js ได้รับความนิยมอย่างรวดเร็วและกลายเป็นหนึ่งใน framework ที่ได้รับความนิยมสูงสุดในการพัฒนาเว็บแอปพลิเคชัน</span>
        </p>

        <h5>พื้นฐาน Vue.js ที่ควรรู้</h5>
        <ul>
    <li>Vue เป็น Reactive Framework ทำให้ UI อัปเดตอัตโนมัติเมื่อ State เปลี่ยนแปลง</li>
    <li>ใช้ Virtual DOM เพื่อเพิ่มประสิทธิภาพ</li>
    <li>Component-Based Architecture ทำให้โค้ดสะอาดและจัดการง่าย</li>
    <li>มี Two-way Data Binding ช่วยให้การอัปเดตข้อมูลใน UI และ State สะดวกขึ้น</li>
      </ul>
        
        
        <h5>Vue.js มีความแตกต่างจาก Framework/Library อื่นอย่างไร</h5>
        <h5>Vue.js vs React</h5>
        <ul>
          <li><strong>การเรียนรู้:</strong> Vue.js มีเอกสารและตัวอย่างที่เข้าใจง่าย ทำให้เริ่มต้นได้เร็วกว่า React</li>
          <li><strong>การใช้งาน:</strong> Vue.js ใช้โครงสร้างแบบ template-based ที่ทำให้สามารถเริ่มต้นสร้าง UI ได้อย่างรวดเร็ว ส่วน React ใช้ JSX ซึ่งอาจต้องใช้เวลาทำความเข้าใจมากขึ้น</li>
          <li><strong>State Management:</strong> Vue.js มี Vuex ที่เป็นเครื่องมือสำหรับการจัดการ state ในขณะที่ React ใช้ Context API หรือ Redux</li>
        </ul>
        <h5>Vue.js vs Angular</h5>
        <ul>
          <li><strong>ขนาดของไฟล์:</strong> Vue.js มีขนาดไฟล์ที่เล็กกว่ามาก ทำให้เหมาะกับการพัฒนาเว็บที่มีขนาดเล็กและไม่ซับซ้อนเกินไป</li>
          <li><strong>การใช้งาน:</strong> Vue.js เป็น framework ที่เรียนรู้ได้ง่ายกว่า Angular ซึ่ง Angular มีการตั้งค่าและโครงสร้างที่ซับซ้อนกว่า</li>
          <li><strong>การบูรณาการกับโปรเจกต์เดิม:</strong> Vue.js สามารถบูรณาการกับโปรเจกต์ที่มีอยู่เดิมได้ง่ายกว่า Angular ที่ต้องมีการจัดการกับโครงสร้างที่ซับซ้อน</li>
        </ul>
        <h5>ข้อดีและคุณสมบัติหลักของ Vue.js</h5>
        <ul>
          <li>🔄 Vue ใช้ระบบตอบสนอง (Reactivity) ทำให้ UI อัปเดตอัตโนมัติเมื่อ State เปลี่ยนแปลง</li>
          <li>🧩 โค้ดแบ่งเป็น Components ทำให้จัดการง่ายและนำกลับมาใช้ใหม่ได้</li>
          <li>📜 ใช้ HTML Template Syntax ที่อ่านง่ายผ่าน Directives (v-bind, v-model, v-if, v-for)</li>
          <li>🖥️ ปรับปรุงประสิทธิภาพโดยอัปเดตเฉพาะส่วนที่เปลี่ยนแปลงแทนการอัปเดต DOM ทั้งหมด</li>
          <li>🔗 ใช้ v-model เชื่อมโยงข้อมูลระหว่าง Model และ View แบบ Two-way</li>
          <li>🚏 รองรับ Single Page Application (SPA) และมีระบบ Routing ในตัว</li>
          <li>📦 จัดการข้อมูลระหว่าง Components ได้ง่ายขึ้น</li>
          <li>⚡ รองรับ เอฟเฟกต์ Transition และ Animation ในตัว</li>
          <li>🛠️ เครื่องมือช่วยพัฒนา Vue อย่าง Vue CLI และ Vite ที่เร็วและใช้งานง่าย</li>
        </ul>
        <h5>ข้อเสียของ Vue.js</h5>
        <ul>
          <li>👨‍👩‍👧 ชุมชนเล็กกว่า React / Angular – Vue ใหม่กว่าทำให้มี Resource น้อยกว่า React</li>
          <li>📦 ระบบ Ecosystem กระจัดกระจาย – บางครั้งต้องเลือกใช้ระหว่าง Vuex, Pinia, หรือ Composition API</li>
          <li>⚠️ อัปเดตเวอร์ชันมี Breaking Changes – Vue 3 เปลี่ยน Syntax และ API บางอย่างจาก Vue 2</li>
          <li>🛠️ รองรับ TypeScript แต่ไม่ดีที่สุด – ไม่ใช่ TypeScript-first แบบ Angular</li>
          <li>🔍 SEO อาจต้องใช้ Nuxt.js – Vue เป็น SPA ซึ่งไม่เหมาะกับ SEO แบบ Static ต้องใช้ SSR หรือ Prerendering</li>
        </ul>
      </div>
    </div>
    <div class="d-flex justify-content-end mt-4">
        <router-link to="/InstallationComponent" class="btn btn-success ">ต่อไป</router-link>
    </div>
  </div>
</template>

<script>
import '@/assets/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default {
  name: "MyHome"
};
</script>

<style scoped>

.btn{
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
}
div {
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
ul {
  text-align: left;
  margin-left: 20px;
}

.button-right {
  position: fixed;
  right: 0;
  bottom: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

</style>
