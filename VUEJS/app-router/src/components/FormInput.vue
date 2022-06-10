<template>
  <div class="container">
    <div class="mx-auto" style="width: 600px">
      <h2 style="text-align: center">Thông tin cá nhân</h2>
      <form>
        <div class="form-group">
          <label for="hoTen">Họ Tên</label>
          <input
            type="text"
            class="form-control"
            v-model="user.hoTen"
            placeholder="VD:Nguyễn Văn A"
          />
        </div>
        <div>Giới Tính:</div>
        <div class="form-check">
          <label class="form-check-label">Nam</label>
          <input
            type="radio"
            class="form-check-input"
            v-model="user.gioiTinh"
            name="optradio"
            :value="true"
          />
        </div>
        <div class="form-check">
          <label class="form-check-label"> Nữ</label>
          <input
            type="radio"
            class="form-check-input"
            v-model="user.gioiTinh"
            name="optradio"
            :value="false"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <textarea
            class="form-control"
            v-model="user.email"
            placeholder="VD:nguyenvana@gmail.com"
            id="email"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="tuoi">Tuổi</label>
          <input
            type="number"
            class="form-control"
            v-model="user.tuoi"
            placeholder="VD:18"
            id="tuoi"
          /><!--type:number co mui ten len xuong-->
        </div>
        <div class="form-group">
          <label for="info">Giới thiệu bản thân</label>
          <textarea
            class="form-control"
            v-model="user.info"
            rows="5"
            id="info"
          ></textarea
          ><br />
        </div>
        <v-btn @click="submit" class="btn btn-primary">Submit</v-btn>
      </form>
      <div v-if="isSubmitted">
        <h3 style="text-align: center">Thông tin của bạn</h3>
        <p>Họ tên:{{ user.hoTen }}</p>
        <p>Email:{{ user.email }}</p>
        <p>Gioi tính:{{ user.gioiTinh }}</p>
        <p>Tuổi:{{ user.tuoi }}</p>
        <p>Gioi thiệu bản thân:{{ user.info }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        hoTen: "",
        email: "",
        tuoi: "",
        gioiThieu: "",
        gioiTinh: null,
      },
      isSubmitted: false,
    };
  },
  methods: {
    submit() {
      this.isSubmitted = true;
    },
  },
};
</script>
