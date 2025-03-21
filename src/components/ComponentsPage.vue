<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto text-left">
        <h2>การสร้างคอมโพเนนต์ใน Vue.js</h2>
        <p>คอมโพเนนต์ใน Vue ช่วยให้โค้ดมีโครงสร้างที่เป็นระเบียบและนำกลับมาใช้ใหม่ได้</p>
        <!-- Tab -->
         <div>
          <button @click="activeTab = 'component'" :class="{'active-tab': activeTab === 'component'}">Component</button>
          <button @click="activeTab = 'data'" :class="{'active-tab': activeTab === 'data'}">Data</button>
          <button @click="activeTab = 'props'" :class="{'active-tab': activeTab === 'props'}">Props</button>
          <button @click="activeTab = 'methods'" :class="{'active-tab': activeTab === 'methods'}">Methods</button>
          <button @click="activeTab = 'computed'" :class="{'active-tab': activeTab === 'computed'}">Computed</button>
          <button @click="activeTab = 'events'" :class="{'active-tab': activeTab === 'events'}">Events</button>
         </div>
         <div class="tab-content">
          <div v-if="activeTab === 'component'">
            <h5>Component</h5>
            <p>คอมโพเนนต์ (Component) ใน Vue.js คืออะไร?</p>
            <p>คอมโพเนนต์ คือ “หน่วยย่อยของหน้าจอ (UI)” ที่สามารถนำกลับมาใช้ซ้ำได้
              มันเปรียบเสมือน “บล็อกเลโก้” ที่ประกอบรวมกันเป็นเว็บไซต์หรือแอพขนาดใหญ่</p>
            <p>ทำไมต้องใช้คอมโพเนนต์?</p>
            <ul style="text-align: left;">
              <li>แยกส่วนการทำงานได้ชัดเจน (แบ่งหน้าจอออกเป็นหลายส่วน เช่น หัวเว็บ ปุ่ม การ์ด)</li>
              <li>ทำให้โค้ดอ่านง่ายและจัดการง่าย</li>
              <li>นำกลับมาใช้ซ้ำได้ เช่น ปุ่มที่ใช้ซ้ำหลายหน้า</li>
              <li>แยก logic ออกเป็นโมดูล ง่ายต่อการ debug และพัฒนาแบบทีม</li>
              <p>ตัวอย่างโครงสร้างของคอมโพเนนต์ (.vue file)</p>
              <p>ไฟล์ .vue หนึ่งไฟล์ = 1 คอมโพเนนต์ มี 3 ส่วนหลัก:</p>
            </ul>
          </div>
          <div v-if="activeTab === 'data'">
            <h5>การใช้ Data</h5>
            <pre><code v-html="formatCode(dataExample)"></code></pre><br>
            <h5>โค้ดของแสดงผล Data</h5>
            <pre><code v-html="formatCode(Datacode)"></code></pre><br>
            <p>ผลลัพธ์: {{ message }}</p>
            <div class="text-left">
              <h5>สรุปการใช้งาน Data</h5>
              <ul>
                <li><strong>หน้าที่ : </strong>เก็บข้อมูลภายในคอมโพเนนต์ที่เป็น state ของตัวเอง เช่น ค่าตัวแปรที่อาจเปลี่ยนแปลงระหว่างการใช้งาน</li>
                <li><strong>การใช้งาน : </strong>ใช้ภายในคอมโพเนนต์เองเพื่อแสดงหรือใช้ในการคำนวณอื่นๆ</li>
                <li><strong>คุณสมบัติ : </strong>สามารถเปลี่ยนแปลงได้ (mutable) และเป็นข้อมูลที่เป็นส่วนตัวของคอมโพเนนต์นั้นๆ</li>
              </ul>
            </div>
          </div>
          
          <div v-if="activeTab === 'props'">
            <h5>การใช้ Props</h5>
            <pre><code v-html="formatCode(propsExample)"></code></pre><br>
            <h5>โค้ดของ GreetingComponent.vue</h5>
            <pre><code v-html="formatCode(greetingComponentCode)"></code></pre><br>
            <Greeting :name="'Vue User'"/>
            <div class="text-left">
              <h5>สรุปการใช้งาน Props</h5>
              <ul>
                <li><strong>หน้าที่ : </strong>ใช้ส่งข้อมูลจากคอมโพเนนต์แม่ (parent) มายังคอมโพเนนต์ลูก (child) เหมือนเป็น parameter ที่ช่วยปรับแต่งหรือกำหนดค่าการทำงานของคอมโพเนนต์ลูก</li>
                <li><strong>การใช้งาน : </strong>คอมโพเนนต์ลูกรับค่าที่ส่งมาจากแม่ผ่าน props และไม่ควรเปลี่ยนแปลงข้อมูลนี้โดยตรง (read-only)</li>
                <li><strong>คุณสมบัติ : </strong>เป็นข้อมูลที่มาจากภายนอก ไม่ควรแก้ไขภายในคอมโพเนนต์ลูก (ควรแก้ไขในแม่แล้วส่งค่าเข้ามาใหม่)</li>
              </ul>
            </div>
          </div>
          <div v-if="activeTab === 'methods'">
            <h5>การใช้ Methods</h5>
            <pre><code v-html="formatCode(methodsExample)"></code></pre><br>
            <h5>โค้ดของ CounterComponent.vue</h5>
            <pre><code v-html="formatCode(counterComponentCode)"></code></pre><br>
            <Counter/>
            <div class="text-left">
              <h5>สรุปการใช้งาน Methods</h5>
              <ul>
                <li><strong>หน้าที่ : </strong>เป็นฟังก์ชันที่จัดการ logic หรือการกระทำของผู้ใช้ (เช่น การคลิกปุ่ม) ใช้สำหรับทำงานบางอย่างเมื่อเกิด event</li>
                <li><strong>การใช้งาน : </strong>เมื่อการกระทำ เช่น การกดปุ่ม จะเรียกใช้ method ที่กำหนดไว้เพื่อประมวลผลหรือเปลี่ยนแปลง state</li>
                <li><strong>คุณสมบัติ : </strong>สามารถเข้าถึงข้อมูลใน data หรือ props และสามารถเปลี่ยนแปลง data ได้ตามต้องการ</li>
              </ul>
            </div>
          </div>
          <div v-if="activeTab === 'computed'">
            <h5>การใช้ Computed Properties</h5>
            <pre><code v-html="formatCode(computedExample)"></code></pre><br>
            <h5>โค้ดของ FullName.vue</h5>
            <pre><code v-html="formatCode(fullNameComponentCode)"></code></pre><br>
            <FullName/>
            <div class="text-left">
              <h5>สรุปการใช้งาน Computed Properties</h5>
              <ul>
                <li><strong>หน้าที่ : </strong>ใช้คำนวณค่าจากข้อมูลใน data หรือ props โดยอัตโนมัติและมีการ cache ผลลัพธ์ไว้จนกว่าข้อมูลที่ใช้คำนวณจะเปลี่ยนแปลง</li>
                <li><strong>การใช้งาน : </strong>เหมาะสำหรับการคำนวณที่อาจมีค่าใช้ซ้ำหลายจุดใน template โดยไม่ต้องคำนวณซ้ำทุกครั้งที่มีการ render</li>
                <li><strong>คุณสมบัติ : </strong>เปรียบเสมือน properties ที่คำนวณจาก state แต่มีประสิทธิภาพมากกว่า method เพราะมีการ cache</li>
              </ul>
            </div>
          </div>
          <div v-if="activeTab === 'events'">
            <h5>การใช้ Events</h5>
            <pre><code v-html="formatCode(eventsExample)"></code></pre><br>
            <h5>โค้ดของ ChildComponent.vue</h5>
            <pre><code v-html="formatCode(childComponentCode)"></code></pre><br>
            <ChildComponent @sendData="receiveData"/> ข้อมูลที่ได้รับจากลูก: {{ dataFromChild }}
            <div class="text-left">
              <h5>สรุปการใช้งาน Events</h5>
              <ul>
                <li><strong>หน้าที่ : </strong>เป็นวิธีการสื่อสารระหว่างคอมโพเนนต์ โดยเฉพาะจากลูกส่งข้อมูลหรือแจ้งเหตุการณ์กลับไปให้แม่รู้ (child-to-parent communication)</li>
                <li><strong>การใช้งาน : </strong>ในคอมโพเนนต์ลูกจะใช้ $emit('eventName',payload) เพื่อส่ง event ไปยังคอมโพเนนต์แม่ฝั่ง event นั้นผ่าน @eventName</li>
                <li><strong>คุณสมบัติ : </strong>ช่วยให้คอมโพเนนต์ลูกไม่ต้องมีการเปลี่ยนแปลง state ภายนอกเอง แต่ส่งสัญญาณให้แม่จัดการแทน</li>
              </ul>
            </div>
          </div>
         </div>
      </div>
      <!-- ปุ่มเปลี่ยนหน้า -->
      <div class="row mt-4">
        <div class="col-6 d-flex justify-content-start">
          <router-link to="/CSSpage" class="btn btn-success">ย้อนกลับ</router-link>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <router-link to="/StateandVuex" class="btn btn-success">ต่อไป</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Greeting from './GreetingComponent.vue'
import Counter from './CounterComponent.vue'
import FullName from './FullName.vue'
import ChildComponent from './ChildComponent.vue'

export default {
  name: "ComponentsPage",
  components: {
    Greeting,
    Counter,
    FullName,
    ChildComponent
  },
  data() {
    return {
      message: "Hello Vue!",
      dataFromChild: '',
      activeTab: 'component',
      
      // ตัวอย่างโค้ด
      dataExample: `export default {
  data() {
    return {
      message: "Hello Vue!"
    };
  }
};`,
      Datacode: `<template>
      <p>ผลลัพธ์: {{ message }}</p>
</template>` 
      ,

      propsExample: `<template>
      <Greeting :name="'Vue User'" />
</template>

<script>
      import Greeting from './GreetingComponent.vue'
      
      export default {
        name: "ComponentsPage",
          components: {
            Greeting
  }
</ script>
      `,

      methodsExample: `<template>
      <Counter />
</template>

<script>
      import Counter from './CounterComponent.vue'    
      export default {
        name: "ComponentsPage",
          components: {
            Counter           
  }
</ script>`,

      computedExample: `<template>
      <FullName />
</template>

<script>
      import FullName from './FullName.vue'     
      export default {
        name: "ComponentsPage",
          components: {         
            FullName
  }
</ script>`,

      eventsExample: `<template>
      <ChildComponent @sendData="receiveData" />
        <p>ข้อมูลที่ได้รับจากลูก: {{ dataFromChild }}</p>
</template>

<script>     
      import ChildComponent from './ChildComponent.vue'
      export default {
        name: "ComponentsPage",
          components: {          
            ChildComponent
  }
</ script>`,

      // โค้ดของ CounterComponent.vue
      counterComponentCode: `<template>
  <div>
    <p>จำนวนครั้ง: {{ count }}</p>
    <button @click="increment">เพิ่มค่า</button>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</ script>`,

      // โค้ดของ GreetingComponent.vue
      greetingComponentCode: `<template>
  <p>Hello, {{ name }}!</p>
</template>

<script>
export default {
  name: "Greeting",
  props: ['name']
};
</ script>`,

      // โค้ดของ FullName.vue
      fullNameComponentCode: `<template>
  <div>
    <p>Full Name: {{ fullName }}</p>
  </div>
</template>

<script>
export default {
  name: "FullName",
  data() {
    return {
      firstName: "Rose",
      lastName: "Jack"
    };
  },
  computed: {
    fullName() {
      return \`\${this.firstName} \${this.lastName}\`;
    }
  }
};
</ script>`,

      // โค้ดของ ChildComponent.vue
      childComponentCode: `<template>
  <button @click="sendData">ส่งข้อมูล</button>
</template>

<script>
export default {
  name: 'ChildComponent',
  methods: {
    sendData() {
      this.$emit('sendData', 'ข้อมูลจากลูก');
    }
  }
};
</ script>`,

    };
  },
  methods: {
    receiveData(data) {
      this.dataFromChild = data;
    },
    formatCode(code) {
      return `<pre style="white-space: pre-wrap; text-align: left;">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
    }
  }
};

</script>

<style scoped>
div {
  text-align: center;
  margin-top: 20px;
}
pre {
  white-space: pre;
  max-width: 100%;
  width: 80%;
  height: auto;
  margin: 0 auto;
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
code {
  font-family: "Courier New",monospace;
  white-space: nowrap;
  word-break: break-word;
  display: block;
  margin-top: 10px;
  margin-left: 3rem;
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.1em;
}
button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
}
/* เพิ่มสไตล์สำหรับปุ่ม */
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
