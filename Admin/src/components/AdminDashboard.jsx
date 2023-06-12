import React, { useState } from 'react'
import { AdminNavbar } from './AdminNavbar';
import "../css/AdminNavbar.css";
import "../css/AdminDashboard.css";
import Chart from "react-apexcharts";

const AdminDashboard = () => {

  const [state, setstate] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]

  })

  const [state2, setstate2] = useState({

    series: [100 , 75 , 50 ],
    

    options: {
              chart: {
                type: 'donut',
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
    // series: [
    //   {
    //     name: "series-1",
    //     data: [30, 40, 45, 50, 49, 60, 70, 91]
    //   }
    // ]

  })

  return (
    <AdminNavbar>
      {/* <div className="container" style={{zIndex:"-1"}}>
  <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Service Provider</h5>
        <p class="card-text">89</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Customer</h5>
        <p class="card-text">40</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total serivces</h5>
        <p class="card-text">40</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Customer</h5>
        <p class="card-text">40</p>
      </div>
    </div>
  </div>
</div>
 <div class="row mt-3">
  <div class="col-sm-8">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Service Provider</h5>
        <p class="card-text">89</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Customer</h5>
        <p class="card-text">40</p>
      </div>
    </div>
  </div>
</div>
  </div> */}


      {/* <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
          </div>
        </div> */}
      {/* <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

        <div class="row">
                            <div class="col-md-6 col-xl-4">
                                <div class="card mb-3 widget-content bg-midnight-bloom">
                                    <div class="widget-content-wrapper text-dark">
                                        <div class="widget-content-left">
                                            <div class="widget-heading ">Total Orders</div>
                                            <div class="widget-subheading">Last year expenses</div>
                                            
                                        </div>
                                        <div class="widget-content-right" style={{float:"right"}}>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4">
                                <div class="card mb-3 widget-content bg-arielle-smile">
                                    <div class="widget-content-wrapper text-dark">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Clients</div>
                                            <div class="widget-subheading">Total Clients Profit</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-dark"><span>$ 568</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4">
                                <div class="card mb-3 widget-content bg-grow-early">
                                    <div class="widget-content-wrapper text-dark">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Followers</div>
                                            <div class="widget-subheading">People Interested</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-dark"><span>46%</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div class="row">
                            <div class="col-md-6 col-xl-4">
                                <div class="card mb-3 widget-content bg-midnight-bloom">
                                    <div class="widget-content-wrapper text-dark">
                                        <div class="widget-content-left">
                                            <div class="widget-heading ">Total Orders</div>
                                            <div class="widget-subheading">Last year expenses</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-dark"><span>1896</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div> */}

      <div class="container">
        <div class="row ">
          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
              <div class="card-block">
                <h6 class="m-b-20">Orders Received</h6>
                <h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>486</span></h2>
                <p class="m-b-0">Completed Orders<span class="f-right">351</span></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
              <div class="card-block">
                <h6 class="m-b-20">Orders Received</h6>
                <h2 class="text-right"><i class="fa fa-rocket f-left"></i><span>486</span></h2>
                <p class="m-b-0">Completed Orders<span class="f-right">351</span></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
              <div class="card-block">
                <h6 class="m-b-20">Orders Received</h6>
                <h2 class="text-right"><i class="fa fa-refresh f-left"></i><span>486</span></h2>
                <p class="m-b-0">Completed Orders<span class="f-right">351</span></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
              <div class="card-block">
                <h6 class="m-b-20">Orders Received</h6>
                <h2 class="text-right"><i class="fa fa-credit-card f-left"></i><span>486</span></h2>
                <p class="m-b-0">Completed Orders<span class="f-right">351</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}

      {/* <div class="d-flex justify-content-center flex-wrap">
<div class="container">
  <div class="row d-flex justify-content-center flex-wrap mx-auto">
    <div class=" overflow-auto col-xl-5   mt-5 mb-5  bg-white text-dark" style={{height:"400px" , overflow:"auto"}}>
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column
      Column

    </div>
    <div class="overflow-auto col-xl-5 mt-5  mb-5  bg-white text-dark" style={{height:"400px"}}>
      Column
    </div>
   
  </div>
</div>
</div> */}

      <div class="row">
        <div class="col-md-12 col-lg-6">
          <div class="mb-3 card">
            <div class="card-header-tab card-header-tab-animation card-header">
              <div class="card-header-title">
                <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                Sales Report
              </div>

            </div>
            <div class="card-body mx-auto">
              <div class="tab-content">
                <div class="tab-pane fade show active" id="tabs-eg-77">
                  <div class="card mb-3 widget-chart widget-chart2 text-left w-100">
                    <div class="widget-chat-wrapper-outer">
                      <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                        <div className="row">
                          <div className="mixed-chart" style={{overflowX:"auto"}}>
                            <Chart
                              options={state.options}
                              series={state.series}
                              type="bar"
                              width="500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-muted  text-uppercase font-size-md opacity-5 font-weight-normal">Top Authors</h6>
                  <div class="scroll-area-sm overflow-auto">
                    <div class="scrollbar-container" style={{ height: "242px" }}>
                      <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <img width="42" class="rounded-circle" src="assets/images/avatars/9.jpg" alt="" />
                              </div>
                              <div class="widget-content-left">
                                <div class="widget-heading">Ella-Rose Henry</div>
                                <div class="widget-subheading">Web Developer</div>
                              </div>
                              <div class="widget-content-right">
                                <div class="font-size-xlg text-muted">
                                  <small class="opacity-5 pr-1">$</small>
                                  <span>129</span>
                                  <small class="text-danger pl-2">
                                    <i class="fa fa-angle-down"></i>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <img width="42" class="rounded-circle" src="assets/images/avatars/5.jpg" alt="" />
                              </div>
                              <div class="widget-content-left">
                                <div class="widget-heading">Ruben Tillman</div>
                                <div class="widget-subheading">UI Designer</div>
                              </div>
                              <div class="widget-content-right">
                                <div class="font-size-xlg text-muted">
                                  <small class="opacity-5 pr-1">$</small>
                                  <span>54</span>
                                  <small class="text-success pl-2">
                                    <i class="fa fa-angle-up"></i>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <img width="42" class="rounded-circle" src="assets/images/avatars/4.jpg" alt="" />
                              </div>
                              <div class="widget-content-left">
                                <div class="widget-heading">Vinnie Wagstaff</div>
                                <div class="widget-subheading">Java Programmer</div>
                              </div>
                              <div class="widget-content-right">
                                <div class="font-size-xlg text-muted">
                                  <small class="opacity-5 pr-1">$</small>
                                  <span>429</span>
                                  <small class="text-warning pl-2">
                                    <i class="fa fa-dot-circle"></i>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <img width="42" class="rounded-circle" src="assets/images/avatars/3.jpg" alt="" />
                              </div>
                              <div class="widget-content-left">
                                <div class="widget-heading">Ella-Rose Henry</div>
                                <div class="widget-subheading">Web Developer</div>
                              </div>
                              <div class="widget-content-right">
                                <div class="font-size-xlg text-muted">
                                  <small class="opacity-5 pr-1">$</small>
                                  <span>129</span>
                                  <small class="text-danger pl-2">
                                    <i class="fa fa-angle-down"></i>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <img width="42" class="rounded-circle" src="assets/images/avatars/2.jpg" alt="" />
                              </div>
                              <div class="widget-content-left">
                                <div class="widget-heading">Ruben Tillman</div>
                                <div class="widget-subheading">UI Designer</div>
                              </div>
                              <div class="widget-content-right">
                                <div class="font-size-xlg text-muted">
                                  <small class="opacity-5 pr-1">$</small>
                                  <span>54</span>
                                  <small class="text-success pl-2">
                                    <i class="fa fa-angle-up"></i>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12 col-lg-6">
          <div class="mb-3 card">
            <div class="card-header-tab card-header-tab-animation card-header">
              <div class="card-header-title">
                <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                Sales Report
              </div>

            </div>
            <div class="card-body">
              <div class="tab-content">
                <div class="tab-pane fade show active" id="tabs-eg-77">
                  <div class="card mb-3 widget-chart widget-chart2 text-left w-100  mx-auto">
                    <div class="widget-chat-wrapper-outer">
                      <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                        <div className="row">
                          <div className="mixed-chart mx-auto" style={{overflowX:"auto"}}>
                            <Chart
                              options={state2.options}
                              series={state2.series}
                              type="donut"
                              width="460"
                              className="mx-auto"
                              
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-muted  text-uppercase font-size-md opacity-5 font-weight-normal">Top Authors</h6>
                  <div class="scroll-area-sm overflow-auto">
                    <div class="scrollbar-container" style={{ height: "240px" }}>
                      <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <img width="42" class="rounded-circle" src="assets/images/avatars/9.jpg" alt="" />
                              </div>
                              <div class="widget-content-left">
                                <div class="widget-heading">Ella-Rose Henry</div>
                                <div class="widget-subheading">Web Developer</div>
                              </div>
                              <div class="widget-content-right">
                                <div class="font-size-xlg text-muted">
                                  <small class="opacity-5 pr-1">$</small>
                                  <span>129</span>
                                  <small class="text-danger pl-2">
                                    <i class="fa fa-angle-down"></i>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <img width="42" class="rounded-circle" src="assets/images/avatars/5.jpg" alt="" />
                              </div>
                              <div class="widget-content-left">
                                <div class="widget-heading">Ruben Tillman</div>
                                <div class="widget-subheading">UI Designer</div>
                              </div>
                              <div class="widget-content-right">
                                <div class="font-size-xlg text-muted">
                                  <small class="opacity-5 pr-1">$</small>
                                  <span>54</span>
                                  <small class="text-success pl-2">
                                    <i class="fa fa-angle-up"></i>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <img width="42" class="rounded-circle" src="assets/images/avatars/4.jpg" alt="" />
                              </div>
                              <div class="widget-content-left">
                                <div class="widget-heading">Vinnie Wagstaff</div>
                                <div class="widget-subheading">Java Programmer</div>
                              </div>
                              <div class="widget-content-right">
                                <div class="font-size-xlg text-muted">
                                  <small class="opacity-5 pr-1">$</small>
                                  <span>429</span>
                                  <small class="text-warning pl-2">
                                    <i class="fa fa-dot-circle"></i>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <img width="42" class="rounded-circle" src="assets/images/avatars/3.jpg" alt="" />
                              </div>
                              <div class="widget-content-left">
                                <div class="widget-heading">Ella-Rose Henry</div>
                                <div class="widget-subheading">Web Developer</div>
                              </div>
                              <div class="widget-content-right">
                                <div class="font-size-xlg text-muted">
                                  <small class="opacity-5 pr-1">$</small>
                                  <span>129</span>
                                  <small class="text-danger pl-2">
                                    <i class="fa fa-angle-down"></i>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <img width="42" class="rounded-circle" src="assets/images/avatars/2.jpg" alt="" />
                              </div>
                              <div class="widget-content-left">
                                <div class="widget-heading">Ruben Tillman</div>
                                <div class="widget-subheading">UI Designer</div>
                              </div>
                              <div class="widget-content-right">
                                <div class="font-size-xlg text-muted">
                                  <small class="opacity-5 pr-1">$</small>
                                  <span>54</span>
                                  <small class="text-success pl-2">
                                    <i class="fa fa-angle-up"></i>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div class="row">
                            <div class="col-md-12 overflow-auto">
                                <div class="main-card mb-3 card">
                                    <div class="card-header">Active Users
                                        <div class="btn-actions-pane-right">
                                            <div role="group" class="btn-group-sm btn-group">
                                                <button class="active btn btn-focus">Last Week</button>
                                                <button class="btn btn-focus">All Month</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                            <tr>
                                                <th class="text-center">#</th>
                                                <th>Name</th>
                                                <th class="text-center">City</th>
                                                <th class="text-center">Status</th>
                                                <th class="text-center">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td class="text-center text-muted">#345</td>
                                                <td>
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left mr-3">
                                                                <div class="widget-content-left">
                                                                    <img width="40" class="rounded-circle" src="assets/images/avatars/4.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div class="widget-content-left flex2">
                                                                <div class="widget-heading">John Doe</div>
                                                                <div class="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-center">Madrid</td>
                                                <td class="text-center">
                                                    <div class="badge badge-warning bg-warning">Pending</div>
                                                </td>
                                                <td class="text-center">
                                                    <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">#347</td>
                                                <td>
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left mr-3">
                                                                <div class="widget-content-left">
                                                                    <img width="40" class="rounded-circle" src="assets/images/avatars/3.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div class="widget-content-left flex2">
                                                                <div class="widget-heading">Ruben Tillman</div>
                                                                <div class="widget-subheading opacity-7">Etiam sit amet orci eget</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-center">Berlin</td>
                                                <td class="text-center">
                                                    <div class="badge badge-success bg-success">Completed</div>
                                                </td>
                                                <td class="text-center">
                                                    <button type="button" id="PopoverCustomT-2" class="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">#321</td>
                                                <td>
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left mr-3">
                                                                <div class="widget-content-left">
                                                                    <img width="40" class="rounded-circle" src="assets/images/avatars/2.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div class="widget-content-left flex2">
                                                                <div class="widget-heading">Elliot Huber</div>
                                                                <div class="widget-subheading opacity-7">Lorem ipsum dolor sic</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-center">London</td>
                                                <td class="text-center">
                                                    <div class="badge badge-danger bg-danger">In Progress</div>
                                                </td>
                                                <td class="text-center">
                                                    <button type="button" id="PopoverCustomT-3" class="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-center text-muted">#55</td>
                                                <td>
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left mr-3">
                                                                <div class="widget-content-left">
                                                                    <img width="40" class="rounded-circle" src="assets/images/avatars/1.jpg" alt=""/></div>
                                                            </div>
                                                            <div class="widget-content-left flex2">
                                                                <div class="widget-heading">Vinnie Wagstaff</div>
                                                                <div class="widget-subheading opacity-7">UI Designer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-center">Amsterdam</td>
                                                <td class="text-center">
                                                    <div class="badge badge-info bg-info">On Hold</div>
                                                </td>
                                                <td class="text-center">
                                                    <button type="button" id="PopoverCustomT-4" class="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <div class="d-block text-center card-footer">
                                        <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger bg-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button>
                                        <button class="btn-wide btn btn-success">Save</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>

    </AdminNavbar>
  )
}

export default AdminDashboard
