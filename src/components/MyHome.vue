<template>
  <div>
    <h1>แนะนำ Vue.js</h1>
    <img :src="require('@/assets/logo.png')" alt="Vue.js Logo" style="width: 200px;">
    <p>
      Vue.js เป็น framework JavaScript ที่ใช้สำหรับสร้าง UI และ Single Page Applications (SPA) โดยเน้นการทำงานที่ง่ายและยืดหยุ่น
      และได้รับความนิยมจากนักพัฒนาเว็บมากขึ้นเรื่อยๆ
    </p>
    <h2>ผู้พัฒนา Vue.js</h2>
    <p>Vue.js ถูกพัฒนาโดย <strong>Evan You</strong> นักพัฒนาเว็บชาวจีนที่เคยทำงานที่ Google
      ก่อนจะตัดสินใจสร้าง Vue.js ขึ้นมาในปี 2014 หลังจากนั้น Vue.js ได้รับความนิยมอย่างรวดเร็ว
      และกลายเป็นหนึ่งใน framework ที่ได้รับความนิยมสูงสุดในการพัฒนาเว็บแอปพลิเคชัน</p>
    
      <h2>พื้นฐาน Vue.js ที่ควรรู้</h2>
      <ul>
    <li>Vue เป็น Reactive Framework ทำให้ UI อัปเดตอัตโนมัติเมื่อ State เปลี่ยนแปลง</li>
    <li>ใช้ Virtual DOM เพื่อเพิ่มประสิทธิภาพ</li>
    <li>Component-Based Architecture ทำให้โค้ดสะอาดและจัดการง่าย</li>
    <li>มี Two-way Data Binding ช่วยให้การอัปเดตข้อมูลใน UI และ State สะดวกขึ้น</li>
      </ul>

    <h2>ความแตกต่างระหว่าง Vue.js กับ Framework/Library อื่นๆ</h2>
    <h3>Vue.js vs React</h3>
    <ul>
      <li><strong>การเรียนรู้:</strong> Vue.js มีเอกสารและตัวอย่างที่เข้าใจง่าย ทำให้เริ่มต้นได้เร็วกว่า React</li>
      <li><strong>การใช้งาน:</strong> Vue.js ใช้โครงสร้างแบบ template-based ที่ทำให้สามารถเริ่มต้นสร้าง UI ได้อย่างรวดเร็ว ส่วน React ใช้ JSX ซึ่งอาจต้องใช้เวลาทำความเข้าใจมากขึ้น</li>
      <li><strong>State Management:</strong> Vue.js มี Vuex ที่เป็นเครื่องมือสำหรับการจัดการ state ในขณะที่ React ใช้ Context API หรือ Redux</li>
    </ul>

    <h3>Vue.js vs Angular</h3>
    <ul>
      <li><strong>ขนาดของไฟล์:</strong> Vue.js มีขนาดไฟล์ที่เล็กกว่ามาก ทำให้เหมาะกับการพัฒนาเว็บที่มีขนาดเล็กและไม่ซับซ้อนเกินไป</li>
      <li><strong>การใช้งาน:</strong> Vue.js เป็น framework ที่เรียนรู้ได้ง่ายกว่า Angular ซึ่ง Angular มีการตั้งค่าและโครงสร้างที่ซับซ้อนกว่า</li>
      <li><strong>การบูรณาการกับโปรเจกต์เดิม:</strong> Vue.js สามารถบูรณาการกับโปรเจกต์ที่มีอยู่เดิมได้ง่ายกว่า Angular ที่ต้องมีการจัดการกับโครงสร้างที่ซับซ้อน</li>
    </ul>

    <h2>ข้อดีและคุณสมบัติหลักของ Vue.js</h2>
    <ul>
      <li>1️⃣🔄 Reactivity System – Vue ใช้ระบบตอบสนอง (Reactivity) ทำให้ UI อัปเดตอัตโนมัติเมื่อ State เปลี่ยนแปลง</li>
      <li>2️⃣🧩 Component-Based Architecture – โค้ดแบ่งเป็น Components ทำให้จัดการง่ายและนำกลับมาใช้ใหม่ได้</li>
      <li>3️⃣📜 Declarative Rendering – ใช้ HTML Template Syntax ที่อ่านง่ายผ่าน Directives (`v-bind`, `v-model`, `v-if`, `v-for`) </li>
      <li>4️⃣🖥️ Virtual DOM – ปรับปรุงประสิทธิภาพโดยอัปเดตเฉพาะส่วนที่เปลี่ยนแปลงแทนการอัปเดต DOM ทั้งหมด</li>
      <li>5️⃣🔗 Two-Way Data Binding – ใช้ `v-model` เชื่อมโยงข้อมูลระหว่าง Model และ View แบบ Two-way</li>
      <li>6️⃣🚏 Vue Router – รองรับ Single Page Application (SPA) และมีระบบ Routing ในตัว</li>
      <li>7️⃣📦 State Management (Vuex / Pinia)  – จัดการข้อมูลระหว่าง Components ได้ง่ายขึ้น</li>
      <li>8️⃣⚡ Transitions & Animations  – รองรับ เอฟเฟกต์ Transition และ Animation ในตัว</li>
      <li>9️⃣🛠️ Vue CLI & Vite – เครื่องมือช่วยพัฒนา Vue อย่าง Vue CLI และ Vite ที่เร็วและใช้งานง่าย</li>
      
      
    </ul>

    <h2>ข้อเสียของ Vue.js</h2>
    <ul>
      <li>1️⃣👨‍👩‍👧 ชุมชนเล็กกว่า React/Angular – Vue ใหม่กว่าทำให้มี Resource น้อยกว่า React</li>
      <li>2️⃣📦 ระบบ Ecosystem กระจัดกระจาย – บางครั้งต้องเลือกใช้ระหว่าง Vuex, Pinia, หรือ Composition API</li>
      <li>3️⃣⚠️ อัปเดตเวอร์ชันมี Breaking Changes – Vue 3 เปลี่ยน Syntax และ API บางอย่างจาก Vue 2</li>
      <li>4️⃣🛠️ รองรับ TypeScript แต่ไม่ดีที่สุด – ไม่ใช่ TypeScript-first แบบ Angular</li>
      <li>5️⃣🔍 SEO อาจต้องใช้ Nuxt.js – Vue เป็น SPA ซึ่งไม่เหมาะกับ SEO แบบ Static ต้องใช้ SSR หรือ Prerendering</li>
    </ul>


    <router-link to="/InstallationComponent" class="button-right">ต่อไป</router-link>
  </div>
</template>

<script>
export default {
  name: "MyHome"
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
ul {
  text-align: left;
  margin-left: 20px;
}
h3 {
  margin-top: 20px;
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
