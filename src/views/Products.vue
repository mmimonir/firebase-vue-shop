<template>
  <div class="products">
    <div class="container">
      <div class="container h-100">
        <div class="intro h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-6">
              <h3>Products Page</h3>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae quos nostrum repellat quas temporibus blanditiis iste rem minima consequuntur.</p>
            </div>
            <div class="col-md-6">
              <img src="/img/svg/products.svg" alt class="img-fluid" />
            </div>
          </div>
        </div>
        <hr />

        <div class="product-test">
          <h3 class="d-inline-block float-left">Products List</h3>
          <button @click="addNew" class="btn-primary float-right">Add Product</button>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products">
                  <td>{{product.name}}</td>
                  <td>{{product.price}}</td>
                  <td>
                    <button class="btn btn-primary">Edit</button>
                    <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="product"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- main product -->
              <div class="col-md-8">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product Name"
                    v-model="product.name"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    name="description"
                    class="form-control"
                    rows="10"
                    placeholder="Product Description"
                    v-model="product.description"
                  ></textarea>
                </div>
              </div>
              <!-- product sidebar -->
              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr />

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product price"
                    v-model="product.price"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product tags"
                    v-model="product.tag"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <input type="file" placeholder="Product tags" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="addProduct()" type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";

export default {
  name: "Products",
  props: {
    msg: String
  },
  data() {
    return {
      products: [],
      product: {
        name: null,
        description: null,
        price: null,
        tag: null,
        image: null
      },
      activeItem: null
    };
  },
  firestore() {
    return {
      products: db.collection("products")
    };
  },
  methods: {
    addNew() {
      $("#product").modal("show");
    },

    updateProduct() {},
    editProduct(product) {},
    deleteProduct(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$firestore.products.doc(id[".key"]).delete();
          Toast.fire({
            type: "success",
            title: "Deleted successfully"
          });
        }
      });
    },
    readData() {},
    addProduct() {
      this.$firestore.products.add(this.product);
      $("#product").modal("hide");
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
