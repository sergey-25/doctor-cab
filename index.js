
import * as bootstrap from 'bootstrap';
import "../node_modules/bootstrap/scss/bootstrap";
import "../node_modules/bootstrap/scss/root";
import "../node_modules/bootstrap/scss/reboot";
import "../node_modules/bootstrap/scss/type";
import "../node_modules/bootstrap/scss/images";
import "../node_modules/bootstrap/scss/containers";
import "../node_modules/bootstrap/scss/grid";

import './sass/custom.scss';





var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example3'
})

var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
})

console.log('hello3333 world')











