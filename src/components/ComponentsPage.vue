<template>
  <div class="container">
    <h2>การสร้างคอมโพเนนต์ใน Vue.js</h2>
    <p>คอมโพเนนต์ใน Vue ช่วยให้โค้ดมีโครงสร้างที่เป็นระเบียบและนำกลับมาใช้ใหม่ได้</p>

    <!-- Tabs -->
    <div class="tabs">
      <button @click="activeTab = 'component'" :class="{'active-tab': activeTab === 'component'}">Component</button>
      <button @click="activeTab = 'data'" :class="{'active-tab': activeTab === 'data'}">Data</button>
      <button @click="activeTab = 'props'" :class="{'active-tab': activeTab === 'props'}">Props</button>
      <button @click="activeTab = 'methods'" :class="{'active-tab': activeTab === 'methods'}">Methods</button>
      <button @click="activeTab = 'computed'" :class="{'active-tab': activeTab === 'computed'}">Computed</button>
      <button @click="activeTab = 'events'" :class="{'active-tab': activeTab === 'events'}">Events</button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <div v-if="activeTab === 'component'">
        <h5>Component</h5>
      </div>

      <div v-if="activeTab === 'data'">
        <h5>การใช้ Data</h5>
        <pre><code v-html="formatCode(dataExample)"></code></pre>
         <h5>โค้ดของแสดงผล Data</h5>
        <pre><code v-html="formatCode(Datacode)"></code></pre>
        <p>ผลลัพธ์: {{ message }}</p>
      </div>

      <div v-if="activeTab === 'props'">
        <h5>การใช้ Props</h5>
        <pre><code v-html="formatCode(propsExample)"></code></pre>
        <h5>โค้ดของ GreetingComponent.vue</h5>
        <pre><code v-html="formatCode(greetingComponentCode)"></code></pre>
        <Greeting :name="'Vue User'" />
      </div>

      <div v-if="activeTab === 'methods'">
        <h5>การใช้ Methods</h5>
        <pre><code v-html="formatCode(methodsExample)"></code></pre>
        
        <h5>โค้ดของ CounterComponent.vue</h5>
        <pre><code v-html="formatCode(counterComponentCode)"></code></pre>
        
        <Counter />
      </div>

      <div v-if="activeTab === 'computed'">
        <h5>การใช้ Computed Properties</h5>
        <pre><code v-html="formatCode(computedExample)"></code></pre>
        <h5>โค้ดของ FullName.vue</h5>
        <pre><code v-html="formatCode(fullNameComponentCode)"></code></pre>
        <FullName />
      </div>

      <div v-if="activeTab === 'events'">
        <h5>การใช้ Events</h5>
        <pre><code v-html="formatCode(eventsExample)"></code></pre>
        <h5>โค้ดของ ChildComponent.vue</h5>
        <pre><code v-html="formatCode(childComponentCode)"></code></pre>
        <ChildComponent @sendData="receiveData" />
        <p>ข้อมูลที่ได้รับจากลูก: {{ dataFromChild }}</p>
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
h5{
  margin: auto;
  padding: 20px;
  text-align: center;
}
p{
  margin: auto;
  padding: 20px;
  text-align: center;
}
div {
  text-align: center;
  margin-top: 20px;
}
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
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
