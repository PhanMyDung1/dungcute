<template>
  <div class="container">
    <div class="mx-auto" style="width: 550px">
      <div class="card mb-4">
        <div>
          <div class="card-body pa-3">
            <div>
              <img
                src="https://i.pinimg.com/280x280_RS/82/50/d0/8250d04e9d24487b578f7a6f50402807.jpg"
                alt="Avatar"
                class="avatar"
              />
              <span class="creator">{{ baiVietHienTai.nguoiTao }}</span>
            </div>
          </div>
          <div class="card-body px-3 py-0">
            <p class="mb-2">{{ baiVietHienTai.noiDung }}</p>
          </div>
          <img class="card-img-bottom" :src="baiVietHienTai.linkAnh" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // /chiTiet/1
    this.baiVietId = this.$route.params.id; //goi den tham so :id khai bao trong router
    this.layBaiVietHienTai();
  },
  data() {
    return {
      baiVietId: 0,
      baiVietHienTai: {}, //đối tượng trống
      baiViets: [
        {
          id: 1,
          linkAnh:
            "https://i.pinimg.com/280x280_RS/82/50/d0/8250d04e9d24487b578f7a6f50402807.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
        {
          id: 2,
          linkAnh:
            "https://i.pinimg.com/280x280_RS/82/50/d0/8250d04e9d24487b578f7a6f50402807.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
        {
          id: 3,
          linkAnh:
            "https://ttol.vietnamnetjsc.vn//2018/03/07/21/04/nu-sinh-17-tuoi-duoc-khen-dep-thuan-khiet-nhu-thien-su_11.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
        {
          id: 4,
          linkAnh:
            "https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
        {
          id: 5,
          linkAnh:
            "https://i.pinimg.com/736x/29/ab/5a/29ab5acafc429ac807f72aece29a5695.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
      ],
    };
  },
  methods: {
    layBaiVietHienTai() {
      this.baiVietHienTai = this.baiViets.find((x) => x.id == this.baiVietId);
    },
  },
};
</script>
<style scoped>
.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  vertical-align: middle;
}
.creator {
  font-size: 17px;
  font-weight: 500;
  margin-left: 10px;
}
</style>
