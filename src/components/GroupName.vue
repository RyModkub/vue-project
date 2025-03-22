<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto">
      <h2>สมาชิกในกลุ่ม</h2>
        <h5>จักรพันธ์ จาดทองคำ 6603052413175</h5>       
        <h5>มานะ นุชสวาท 6603052413183</h5>       
        <h5>ปุญญพัฒน์ ไพบูลย์กลุกร 66030052413060</h5>       
        <h5>วรภพ หล้าปาวงค์ 6603052423057</h5>       
      </div>
      <div class="row mt-4">
        <div class="col-6 d-flex justify-content-start"><router-link to="/APIpage" class="btn btn-success">ย้อนกลับ</router-link></div>
       
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  name: "GroupName"
};
</script>

<style scoped>
.token.function{
  color: #f08d49;
}
.image {
  width: 100%;
  max-width: 600px;
  margin-top: 10px;
}

pre {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  overflow-y: auto;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  tab-size: 4;
  -webkit-hyphens: none;
  hyphens: none;
  background: #2c3e50;
}
code {
  margin: 0;
  border-radius: 3px;
  padding: .25rem .5rem;
  font-family: var(--code-font-family);
  font-size: 1.1em;
  color: #eee;
  background-color: var(--code-inline-bg-color);
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