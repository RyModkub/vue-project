<template>
  <div class="container">
    <div class="row">
      <div class="col-8 mx-auto text-left">
        <h2>การอธิบาย State และ Vuex</h2>
        <h5>State คืออะไร?</h5>
        <p>ใน Vue.js, <strong>State</strong> หมายถึงข้อมูลของคอมโพเนนต์ที่สามารถเปลี่ยนแปลงได้และส่งผลกระทบต่อ UI สามารถแชร์ข้อมูลระหว่างหลาย component ได้ </p>
        <h5>ลักษณะของ State ใน Vue.js:</h5>
        <li>เก็บข้อมูลของคอมโพเนนต์ (Component-Level State)</li>
        <li>เปลี่ยนค่าแล้ว Vue จะ Re-render UI อัตโนมัติ</li>
        <li>ใช้ร่วมกับ computed และ watch เพื่อติดตามการเปลี่ยนแปลง</li>
        <h5>computed คืออะไร?</h5>
        <p>computed ใช้สำหรับ คำนวณค่า (Derived Data) จาก State โดยอัตโนมัติ และจะถูก Cache ไว้เพื่อลดการประมวลผลซ้ำ ๆ</p>
        <h5> ข้อดีของ computed:</h5>
        <li>คำนวณค่าอัตโนมัติเมื่อ State เปลี่ยน</li>
        <li>มีการ Cache → ถ้าข้อมูลเดิมไม่เปลี่ยน จะไม่คำนวณใหม่</li>
        <li>ใช้งานง่ายกว่าการใช้ methods</li>
        <h5>watch คืออะไร?</h5>
        <p>watch ใช้สำหรับ เฝ้าดูการเปลี่ยนแปลงของค่าใน State แล้วรันโค้ดที่ต้องการเมื่อค่ามีการเปลี่ยนแปลง</p>
        <h5>ข้อดีของ watch:</h5>
        <li>ใช้เมื่อมี Side Effects เช่น เรียก API, บันทึกค่า, หรือดีบั๊ก</li>
        <li>ใช้ติดตามค่า เฉพาะเจาะจง</li>

        <h5>Vuex คืออะไร?</h5>
        <p><strong>Vuex</strong> เป็นไลบรารีสำหรับจัดการ State ใน Vue.js ซึ่งออกแบบมาเพื่อช่วยให้สามารถจัดการข้อมูลที่แชร์ระหว่างคอมโพเนนต์ได้อย่างมีประสิทธิภาพ โดย Vuex ประกอบด้วย</p>
        <ul>
          <li><strong>State : </strong>เก็บข้อมูลของแอปพลิเคชัน</li>
          <li><strong>Mutations : </strong>ใช้เพื่อเปลี่ยนแปลง State</li>
          <li><strong>Actions : </strong>รองรับการทำงานแบบอะซิงโครนัส (เช่น ดึงข้อมูลจาก API)</li>
          <li><strong>Getters : </strong>ใช้ดึงหรือคำนวณค่าจาก State</li>
        </ul>
        <h5>ตัวอย่างการใช้งาน State และ Vuex</h5><br>
        <pre><code style="text-align: left;">
          import { createStore } from 'vuex'; <br>
          
          const store = createStore({<br>
            state: {<br>
              count: 0 <br>
            }, <br>
            mutations: { <br>
              increment(state) { <br>
                state.count++; <br>
              }, <br>
              decrement(state) { <br>
                state.count--; <br>
              } <br>
            }, <br>
            actions: { <br>
              increment({ commit }){ <br>
                increment('increment') <br>
              }, <br>
              decrement({ commit }){ <br>
                commit('decrement'); <br>
              } <br>
            }, <br>
            getters: { <br>
              count: (state) => state.count <br>
            } <br>
          }); <br>
          
          export default store;
        </code></pre><br>
        <h5>ตัวอย่างการแสดงผลในคอมโพเนนต์</h5>
        <div>
          <h2>การใช้งาน State และ Vuex</h2>
          <h5>จำนวน : {{ count }}</h5>
          <button @click="increment">เพิ่ม</button>
          <button @click="decrement">ลด</button>
        </div>      
      <div class="row mt-4">
        <div class="col-6 d-flex justify-content-start"><router-link to="/ComponentsPage" class="btn btn-success">ย้อนกลับ</router-link></div>
        <div class="col-6 d-flex justify-content-end"><router-link to="/Router" class="btn btn-success">ต่อไป</router-link></div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
    import '@/assets/Style.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    import {computed } from 'vue';
    import {useStore } from 'vuex';

    

    export default {
      name: 'CounterComponent',
      setup() {
        const store = useStore();
        const count = computed(() => store.getters.count);

        const increment = () => store.dispatch('increment');
        const decrement = () => store.dispatch('decrement');

        return { count, increment, decrement };
      }
    }
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
  margin: 10px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
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
