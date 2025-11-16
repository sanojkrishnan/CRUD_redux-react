import React from "react";

function Create() {
  return (
    <div className="w-25 border rounded-3 bg-light float-end me-5 p-3 mt-5 ">
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Age
          </label>
          <input type="number" class="form-control" id="email" />
        </div>
        <div class="mb-3">
          <input class="form-check-input" type="radio" value="" />
          <label class="form-check-label">&nbsp;&nbsp;&nbsp;Male</label>
        </div>
        <div class="mb-3">
          <input class="form-check-input" type="radio" value="" />
          <label class="form-check-label">&nbsp;&nbsp;&nbsp;Female</label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
