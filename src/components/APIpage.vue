<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto text-left">
        <h2>การใช้งาน API ใน Vue.js</h2>
        <div>
          <button @click="activeTab = 'overview'" :class="{ 'active-tab': activeTab === 'overview' }">API คืออะไร?</button>
          <button @click="activeTab = 'get'" :class="{'active-tab': activeTab === 'get'}">GET</button>
          <button @click="activeTab = 'post'" :class="{'active-tab': activeTab === 'post'}">POST</button>
          <button @click="activeTab = 'put'" :class="{'active-tab': activeTab === 'put'}">PUT</button>
          <button @click="activeTab = 'delete'" :class="{'active-tab': activeTab === 'delete'}">DELETE</button>
        </div>

        <!-- get -->
        <div v-if="activeTab === 'overview'">
            <div class="container text-left">
    <h2>ทฤษฎีเกี่ยวกับ API ใน Vue.js</h2>
    <p>
      API (Application Programming Interface) คือ ชุดคำสั่งที่ช่วยให้ระบบต่าง ๆ
      สื่อสารกันได้ โดย Vue.js สามารถใช้ API เพื่อดึงข้อมูลจาก Backend (เซิร์ฟเวอร์)
      หรือแหล่งข้อมูลอื่น ๆ มาแสดงผลบน UI
    </p>

    <h5>API ใน Vue.js ทำงานอย่างไร?</h5>
    <ul>
      <li>Vue Component ทำการร้องขอข้อมูล (Request) ไปยัง API</li>
      <li>API ประมวลผลคำขอ และส่งข้อมูลกลับมา (Response)</li>
      <li>Vue Component รับข้อมูล และอัปเดต UI ให้แสดงผลข้อมูลนั้น</li>
    </ul>

    <h5>วิธีเรียก API ใน Vue.js โดยใช้ fetch()</h5>
    <p>
      fetch() เป็น built-in JavaScript API ที่ใช้สำหรับการดึงข้อมูลจากเซิร์ฟเวอร์ โดยไม่ต้องติดตั้งไลบรารีเพิ่ม
      สามารถใช้ใน Vue.js ได้ง่าย ๆ ใน Options API
    </p>

    <h5>✅ ข้อดีของ fetch()</h5>
    <ul>
      <li>ไม่มี dependency เพิ่มเติม (Built-in)</li>
      <li>ใช้งานได้กับ JavaScript และ Vue ทุกเวอร์ชัน</li>
    </ul>

    <h5>❌ ข้อเสียของ fetch()</h5>
    <ul>
      <li>ใช้ .then() เยอะ ทำให้โค้ดยุ่งเหยิง</li>
      <li>ต้องแปลงข้อมูล JSON เอง</li>
      <li>ไม่มีการจัดการ error ในตัว ต้องเขียนเอง</li>
    </ul>

    <h5>ตัวอย่าง fetch() ใน Vue 3 (Options API)</h5><br>

    <pre><code v-html="formatCode(ONE)"></code></pre><br>
    <ul>
    <li>✅ โหลด API เมื่อคอมโพเนนต์ถูก mount (mounted())</li>
    <li>✅ ใช้ fetch() ดึงข้อมูล JSON และแสดงผลทันที </li>
    </ul><br>
    <pre><code v-html="formatCode(TWO)"></code></pre><br>
    <ul>
    <li>✅ ใช้ v-for → วนลูปแสดงรายชื่อผู้ใช้ที่ได้จาก API</li>
    <li>✅ ใช้ :key="user.id" → ป้องกัน Vue แจ้งเตือนเกี่ยวกับคีย์ที่ซ้ำ</li>
    <li>✅ ใช้ data() → สร้างตัวแปร users เพื่อเก็บข้อมูล</li>
    <li>✅ ใช้ mounted() → ดึงข้อมูลจาก API ทันทีที่โหลดหน้าเว็บ</li>
    <li>✅ ใช้ fetch() → เรียก API แล้วแปลง response เป็น JSON</li>
    </ul>
    <h3>✅ สรุป</h3>
    <ul>
      <li>โค้ดนี้ใช้ fetch() เพื่อโหลดข้อมูลผู้ใช้จาก API และแสดงใน &lt;ul&gt;</li>
      <li>mounted() ช่วยให้ API ถูกเรียกเมื่อคอมโพเนนต์โหลดเสร็จ</li>
      <li>ใช้โค้ดน้อย อ่านง่าย แต่ไม่มีการจัดการ error (ถ้าต้องการ error handling ต้องเพิ่ม try...catch)</li>
    </ul>

    <h5>หลักการทำงานของ API กับ Vue.js</h5>
    <p>API มีหลายรูปแบบ ซึ่ง Vue.js สามารถใช้ได้ เช่น:</p>
    <ul>
      <li><b>GET:</b> ใช้สำหรับ ขอข้อมูล จาก API โดยไม่มีการเปลี่ยนแปลงข้อมูล</li>
      <li><b>POST:</b> ใช้สำหรับ สร้างข้อมูลใหม่ เช่น เพิ่มผู้ใช้ใหม่, บันทึกฟอร์ม</li>
      <li><b>PUT:</b> ใช้สำหรับ แก้ไขข้อมูลทั้งก้อน เช่น อัปเดตข้อมูลผู้ใช้</li>
      <li><b>DELETE:</b> ใช้สำหรับ ลบข้อมูลจากเซิร์ฟเวอร์ เช่น ลบผู้ใช้, ลบโพสต์</li>
    </ul>
  </div>
        
        </div>
         <!-- GET -->
        <div v-if="activeTab === 'get'">
          <h5>GET Request</h5>
          <h5>ใช้สำหรับ ขอข้อมูลจาก API โดยไม่มีการเปลี่ยนแปลงข้อมูล</h5>
          <button @click="fetchData">ดึงข้อมูล</button>
          <ul>
            <li v-for="item in items" :key="item.id">ID: {{ item.id }} Name: {{ item.name }}</li>
          </ul>

          <div>
            <h5>Vue.js (Client-side)</h5>
            <pre><code style="text-align: left;">
              fetch(this.apiUrl)  // ส่งคำขอ GET ไปยังเซิร์ฟเวอร์เพื่อดึงข้อมูล <br>
              .then(response => response.json())  // แปลงข้อมูลที่ได้เป็น JSON <br>
              .then(data => {  // เมื่อได้รับข้อมูลจากเซิร์ฟเวอร์ <br>
                this.items = data;  // กำหนดข้อมูลที่ได้รับให้กับ items <br>
              }) <br>
              .catch(error => {  // หากเกิดข้อผิดพลาด <br>
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error);  // แสดงข้อผิดพลาด <br>
              });
            </code></pre>
            <h5>Vue.js (Server-side)</h5>
            <pre><code style="text-align: left;"><br>
                app.get("/items", (req, res) => {<br>
                res.json(items);<br>
              });
               </code></pre>
          </div>
        </div>

        <!-- POST -->
        <div v-if="activeTab === 'post'">
          <h5>POST Request</h5>
          <h5>ใช้สำหรับ สร้างข้อมูลใหม่ เช่น เพิ่มผู้ใช้ใหม่, บันทึกฟอร์ม</h5>
          <input v-model="newItem" placeholder="เพิ่มข้อมูลใหม่">
          <button @click="addItem">เพิ่มข้อมูล</button>
          
          <h5>Vue.js (Client-side)</h5>
          <pre><code style="text-align: left;">
            fetch(this.apiUrl, {<br>
              method: 'POST',  // ใช้ method POST<br>
              headers: {<br>
                'Content-Type': 'application/json'  // แจ้งประเภทข้อมูลที่ส่ง<br>
              },<br>
              body: JSON.stringify({ name: this.newItem })  // ส่งข้อมูลใน body<br>
            }) <br>
            .then(response => response.json())  // แปลงข้อมูลที่ได้เป็น JSON<br>
            .then(data => {<br>
              this.fetchData();  // เรียกข้อมูลใหม่เพื่ออัปเดตการแสดงผล<br>
            })<br>
            .catch(error => {<br>
              console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล", error);<br>
            });
          </code></pre>
          <h5>Vue.js (Server-side)</h5>
          <pre><code style="text-align: left;"><br>
            app.post("/items", (req, res) => {<br>
          const newItem = { id: Date.now(), name: req.body.name };<br>
          items.push(newItem);<br>
            res.json(newItem);<br>
            });
             </code></pre>
        </div>

        <!-- PUT -->
        <div v-if="activeTab === 'put'">
          <h5>PUT Request</h5>
          <h5>ใช้สำหรับ แก้ไขข้อมูลทั้งก้อน เช่น อัปเดตข้อมูลผู้ใช้</h5>
          <div>
            <input style="margin: 10px;" v-model="updateId" placeholder="ID ที่ต้องการแก้ไข">
            <input style="margin: 10px;" v-model="updateValue" placeholder="ค่าใหม่">
            <button @click="updateItem">อัปเดตข้อมูล</button>
          </div>

          <h5>Vue.js (Client-side)</h5>
          <pre><code style="text-align: left;">
            fetch(`${this.apiUrl}/${this.updateId}`, {<br>
              method: 'PUT',  // ใช้ method PUT<br>
              headers: {<br>
                'Content-Type': 'application/json'<br>
              },<br>
              body: JSON.stringify({ name: this.updateValue })<br>
            })<br>
            .then(response => response.json())<br>
            .then(data => {<br>
              this.fetchData();<br>
            })<br>
            .catch(error => {<br>
              console.error("เกิดข้อผิดพลาดในการอัปเดตข้อมูล", error);<br>
            });
          </code></pre>
          <h5>Vue.js (Server-side)</h5>
          <pre><code style="text-align: left;">
              app.put("/items/:id", (req, res) => {<br>
                const id = parseInt(req.params.id);<br>
                const item = items.find((i) => i.id === id);<br>
                  if (item) {<br>
                    item.name = req.body.name;<br>
                      res.json(item);<br>
                    } else {<br>
                  res.status(404).json({ message: "Item not found" });<br>
                 }<br>
              });
             </code></pre>
        </div>

        <!-- DELETE -->
        <div v-if="activeTab === 'delete'">
          <h5>DELETE Request</h5>
          <h5>ใช้สำหรับ ลบข้อมูลจากเซิร์ฟเวอร์</h5>
          <input style="margin: 10px;" v-model="deleteId" placeholder="ID ที่ต้องการลบ">
          <button @click="deleteItem">ลบข้อมูล</button>

          <h5>Vue.js (Client-side)</h5>
          <pre><code style="text-align: left;">
            fetch(`${this.apiUrl}/${this.deleteId}`, {<br>
              method: 'DELETE'  // ใช้ method DELETE<br>
            })<br>
            .then(() => {<br>
              this.fetchData();  // เรียกข้อมูลใหม่หลังจากลบเสร็จ<br>
            })<br>
            .catch(error => {<br>
              console.error("เกิดข้อผิดพลาดในการลบข้อมูล", error);<br>
            });
          </code></pre>
          <h5>Vue.js (Server-side)</h5>
          <pre><code style="text-align: left;">
              app.delete("/items/:id", (req, res) => {<br>
              const id = parseInt(req.params.id);<br>
              items = items.filter((i) => i.id !== id);<br>
              res.json({ message: "Deleted" });<br>
            });<br>
             </code></pre>
        </div>
      </div>

      <div class="row mt-4">      
          <div class="col-6 d-flex justify-content-start"><router-link to="/Router" class="btn btn-success">ย้อนกลับ</router-link></div>
        <div class="col-6 d-flex justify-content-end"><router-link to="/GroupName" class="btn btn-success">ต่อไป</router-link></div>
        </div>
      
    </div>
  </div>
</template>

<script>

import '@/assets/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default {
  data() {
    return {
      activeTab: 'overview',
      items: [],
      newItem: '',
      updateId: '',
      updateValue: '',
      deleteId: '',
      ONE: `<template>
  <div>
    <h2>รายชื่อผู้ใช้</h2>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: []
    };
  },
  async mounted() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    this.users = await response.json();
  }
};
</ script>

`,

TWO:`<template>
  <div>
    <h2>รายชื่อผู้ใช้</h2>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [] // เก็บรายชื่อผู้ใช้จาก API
    };
  },
  async mounted() {
    // ใช้ fetch() เพื่อดึงข้อมูลจาก API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    this.users = await response.json(); // แปลง response เป็น JSON และเก็บลง users
  }
};
</ script>
`
    };
  },
  methods: {
  fetchData() {
    fetch('http://localhost:3000/items')
      .then(response => response.json())  // แปลง response เป็น JSON
      .then(data => {
        this.items = data;  // เก็บข้อมูลที่ได้รับลงใน items
      })
      .catch(error => {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล", error);
      });
  },

  addItem() {
    fetch('http://localhost:3000/items', {  // ลบ / ออกไป
      method: 'POST',  // กำหนดวิธีการส่งคำขอเป็น POST
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: this.newItem })  // ส่งข้อมูลในรูปแบบ JSON
    })
      .then(response => response.json())  // แปลง response เป็น JSON
      .then(data => {
        console.log("ข้อมูลที่เพิ่ม: ", data);
        this.fetchData();  // เรียก fetchData เพื่ออัปเดตข้อมูล
      })
      .catch(error => {
        console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล", error);
      });
  },

  updateItem() {
    fetch(`http://localhost:3000/items/${this.updateId}`, {
      method: 'PUT',  // กำหนดวิธีการส่งคำขอเป็น PUT
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: this.updateValue })  // ส่งข้อมูลที่ต้องการอัปเดต
    })
      .then(response => response.json())  // แปลง response เป็น JSON
      .then(data => {
        console.log("ข้อมูลที่อัปเดต: ", data);
        this.fetchData();  // เรียก fetchData เพื่ออัปเดตข้อมูล
      })
      .catch(error => {
        console.error("เกิดข้อผิดพลาดในการอัปเดตข้อมูล", error);
      });
  },

  deleteItem() {
    fetch(`http://localhost:3000/items/${this.deleteId}`, {
      method: 'DELETE'  // กำหนดวิธีการส่งคำขอเป็น DELETE
    })
      .then(response => response.json())  // แปลง response เป็น JSON
      .then(data => {
        console.log("ข้อมูลที่ลบ: ", data);
        this.fetchData();  // เรียก fetchData เพื่ออัปเดตข้อมูล
      })
      .catch(error => {
        console.error("เกิดข้อผิดพลาดในการลบข้อมูล", error);
      });
  },
formatCode(code) {
      return `<pre style="white-space: pre-wrap; text-align: left;">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
    }

  }
  
};
</script>
<style scoped>

</style>