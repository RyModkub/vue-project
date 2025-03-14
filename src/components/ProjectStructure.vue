<template>
  <div>
    <h1>โครงสร้างโปรเจกต์ใน Vue.js</h1>
    <p>เมื่อคุณสร้างโปรเจกต์ Vue.js ด้วย Vue CLI จะมีโครงสร้างโปรเจกต์ที่ถูกตั้งค่าไว้ล่วงหน้าเพื่อให้การพัฒนาแอปพลิเคชันมีความสะดวกและมีระเบียบมากขึ้น</p>

    <h2>โครงสร้างไฟล์หลักของ Vue.js</h2>
    <p>เมื่อสร้างโปรเจกต์ Vue.js ด้วย Vue CLI, โครงสร้างไฟล์และโฟลเดอร์จะเป็นดังนี้:</p>
    <div>
      <!-- ช่องสำหรับใส่รูปโครงสร้างโปรเจกต์ -->
      <img :src="require('@/assets/project-structure.png')" alt="โครงสร้างโปรเจกต์" style="width: 100%; max-width: 600px;">
    </div>
    
    <h2>รายละเอียดของไฟล์หลัก</h2>
    
    <!-- node_modules -->
    <h3>1. node_modules/</h3>
    <p>โฟลเดอร์นี้เก็บทุก package หรือ dependencies ที่โปรเจกต์ของคุณใช้ ซึ่งจะถูกติดตั้งโดย NPM หรือ Yarn เมื่อคุณรันคำสั่ง <code>npm install</code> หรือ <code>yarn install</code></p>
    
      <ul>
        <h3>ทำไมต้องมี node_modules/</h3>
    <li>เก็บไลบรารีและแพ็กเกจ ที่โปรเจกต์ต้องใช้ เช่น Vue, React, Express ฯลฯ</li>
    <li>ทำให้โค้ดใช้งานร่วมกับแพ็กเกจของ Node.js ได้</li>
    <li>จัดการ dependencies ตามที่ระบุใน package.json</li>
      </ul>
      
      
    <div>
      <!-- ช่องสำหรับใส่รูป node_modules -->
      <img :src="require('@/assets/node_modules.png')" alt="node_modules" style="width: 100%; max-width: 600px;">
    </div>

    <!-- public -->
    <h3>2. public/</h3>
    <p>โฟลเดอร์ที่เก็บไฟล์ของทุกแพ็กเกจ (dependencies) ที่โปรเจกต์ของคุณต้องใช้ ซึ่งติดตั้งมาผ่าน npm install หรือ yarn install</p>
    <ul>
      <h3>public/ใช้ทำอะไร?</h3>
      <p>เก็บไฟล์ที่ ไม่ต้องการให้ Webpack ประมวลผล เช่น:</p>
      <li><strong>index.html:</strong> (แม่แบบ HTML หลักของ Vue)</li>
      <li><strong>favicon.ico:</strong> (ไอคอนของเว็บ)</li>
      <li>รูปภาพ, ไฟล์<strong>.pdf, .txt</strong> ที่ต้องการเข้าถึงผ่าน URL</li>
    </ul>
    <div>
      <!-- ช่องสำหรับใส่รูป public -->
      <img :src="require('@/assets/public.png')" alt="public" style="width: 100%; max-width: 600px;">
    </div>

    <!-- src -->
    <h3>3. src/</h3>
    <p>โฟลเดอร์ src เป็นที่เก็บไฟล์หลักของแอปพลิเคชัน Vue.js ของคุณ ซึ่งประกอบด้วย:</p>
    <ul>
      <li><strong>assets/:</strong> เก็บไฟล์ที่ไม่ใช่โค้ดเช่น รูปภาพ, ไฟล์ CSS, ฟอนต์ ฯลฯ</li>
      <li><strong>components/:</strong> โฟลเดอร์นี้เก็บไฟล์ Vue components ซึ่งแต่ละคอมโพเนนต์จะรับผิดชอบการแสดงผลของส่วนต่างๆ ของแอปพลิเคชัน</li>
      <li><strong>App.vue:</strong> คอมโพเนนต์หลักของแอปพลิเคชัน ซึ่งจะเป็นคอมโพเนนต์เริ่มต้นที่แสดงใน <code>index.html</code></li>
      <li><strong>main.js:</strong> เป็นไฟล์ที่กำหนดจุดเริ่มต้นของโปรเจกต์ Vue โดยจะทำการเชื่อมต่อ Vue instance เข้ากับ element ใน <code>index.html</code></li>
    </ul>
    <div>
      <!-- ช่องสำหรับใส่รูป src -->
      <img :src="require('@/assets/src.png')" alt="src" style="width: 100%; max-width: 600px;">
    </div>

    <h3>รายละเอียดโฟลเดอร์ย่อยใน src/</h3>
    <!-- assets -->
    <h4>3.1 assets/</h4>
    <p>เป็นโฟลเดอร์ที่ใช้เก็บ ไฟล์ Static ที่ต้องการให้ Webpack จัดการ</p>
    <ul><h3>assets/ ใช้ทำอะไร?</h3>
    <li>เก็บไฟล์ที่ต้อง Import ในโค้ด Vue เช่น: รูปภาพ (.png, .jpg, .svg) (ไฟล์ CSS, SCSS) (ไอคอน, ฟอนต์)</li>
    <li>Webpack จะช่วย Optimize ไฟล์ให้เล็กลง</li>
    <li>ใช้ @/assets/ ใน Vue Component เพื่อเข้าถึงไฟล์</li>
    </ul>
    <div>
      <!-- ช่องสำหรับใส่รูป assets -->
      <img :src="require('@/assets/assets.png')" alt="assets" style="width: 100%; max-width: 600px;">
    </div>

    <!-- components -->
    <h4>3.2 components/</h4>
    <p>เป็นโฟลเดอร์ที่ใช้เก็บ Vue Components ซึ่งเป็นส่วนประกอบของ UI ที่สามารถนำกลับมาใช้ซ้ำได้</p>
    <ul>
      <h3>components/ ใช้ทำอะไร?</h3>
      <li>แยกส่วนของ UI ออกเป็น Component ย่อย ๆ เช่น ปุ่ม (Button.vue) Navbar (Navbar.vue) Card (Card.vue)</li>
      <li>ช่วยให้โค้ดเป็นระเบียบ และจัดการง่าย</li>
      <li>สามารถใช้ Props และ Events เพื่อสื่อสารกันระหว่าง Components</li>

    </ul>
    <div>
      <!-- ช่องสำหรับใส่รูป components -->
      <img :src="require('@/assets/components.png')" alt="components" style="width: 100%; max-width: 600px;">
    </div>


    <h3>4. package.json</h3>
    <p>เป็นไฟล์ สำคัญของโปรเจกต์ Vue.js (และ Node.js) ใช้สำหรับ จัดการ dependencies และตั้งค่าโปรเจกต์</p>
    <ul>
      <h3>package.json ใช้ทำอะไร?</h3>
      <li>เก็บข้อมูลเกี่ยวกับโปรเจกต์ เช่น ชื่อ, เวอร์ชัน, คำอธิบาย</li>
      <li>ระบุ dependencies (ไลบรารีที่โปรเจกต์ใช้) เช่น Vue, Vue Router</li>
      <li>กำหนด scripts สำหรับรันคำสั่ง เช่น npm run serve</li>
      <li>ใช้ร่วมกับ npm install เพื่อติดตั้ง dependencies</li>

    </ul>
    <div>
      <!-- ช่องสำหรับใส่รูป package.json -->
      <img :src="require('@/assets/package-json.png')" alt="package.json" style="width: 100%; max-width: 600px;">
    </div>

    <h3>5. babel.config.js</h3>
    <p>เป็นไฟล์ ตั้งค่า Babel ซึ่งใช้สำหรับ แปลงโค้ด JavaScript รุ่นใหม่ ให้รองรับเบราว์เซอร์เก่า</p>
    <ul>
      <h3>babel.config.js ใช้ทำอะไร?</h3>
      <li>ช่วยให้ JavaScript เวอร์ชันใหม่ทำงานได้ในเบราว์เซอร์เก่า</li>
      <li>ใช้กับ Vue.js และ Webpack เพื่อคอมไพล์โค้ด ES6/ESNext เป็น ES5</li>
      <li>รองรับ Plugins และ Presets เพื่อปรับแต่งการแปลงโค้ด</li>
      
    </ul>
    
    <div>
      <!-- ช่องสำหรับใส่รูป babel.config.js -->
      <img :src="require('@/assets/babel-config.png')" alt="babel.config.js" style="width: 100%; max-width: 600px;">
    </div>

    <h3>6. vue.config.js</h3>
    <p>เป็นไฟล์ ตั้งค่าหลักของ Vue.js ที่ใช้ปรับแต่งการทำงานของ Vue CLI และ Webpack</p>
    <ul>
      <h3>vue.config.js ใช้ทำอะไร?</h3>
      <li>กำหนดค่า Webpack เช่น เพิ่ม Plugin, Alias, Proxy</li>
      <li>ตั้งค่า Server เช่น เปลี่ยนพอร์ต, เปิด Hot Reload</li>
      <li>กำหนด Path ของ Static Assets เช่น publicPath</li>
      <li>เปิดใช้งาน CSS Preprocessor เช่น SCSS, Less</li>
    </ul>
    
    <div>
      <!-- ช่องสำหรับใส่รูป vue.config.js -->
      <img :src="require('@/assets/vue-config.png')" alt="vue.config.js" style="width: 100%; max-width: 600px;">
    </div>

    <!-- เพิ่มปุ่มย้อนไปหน้า Home และไป Basic Usage -->
    <router-link to="/InstallationComponent" class="button-left">ย้อนกลับ</router-link>
    <router-link to="/BasicPage" class="button-right">ต่อไป</router-link>
  </div>
</template>

<script>
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
.button-left {
  position: fixed;
  left: 0;
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
