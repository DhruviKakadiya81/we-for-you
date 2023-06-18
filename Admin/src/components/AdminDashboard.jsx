import React, { useEffect, useState } from 'react'
import { AdminNavbar } from './AdminNavbar';
import "../css/AdminNavbar.css";
import "../css/AdminDashboard.css";
import '../services/dashboard';
import Chart from "react-apexcharts";
import dashboard from '../services/dashboard';


const AdminDashboard = () => {
  const [data, setdata] = useState();
  const [spmsg, setspmsg] = useState([]);
  const [user, setuser] = useState([]);
  const [Active, setActive] = useState([]);
  // const [data2, setdata2] = useState();
  let index = 1;
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

    series: [100, 75, 50],


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


  });



  const handledetails = async () => {
    const response = await dashboard.dashboard();
    setdata(response.data.data);
    const response2 = await dashboard.showspmsg();
    setspmsg(response2.data.data);
    const response3 = await dashboard.showusermsg();
    setuser(response3.data.data);
    const response4 = await dashboard.getallactive();
    setActive(response4.data.data);
    // const response5 = await dashboard.order();
    // setdata2(response5.data);
    console.log(response);
  }

  useEffect(() => {
    handledetails();
  }, [])
  console.log("1", data); console.log("2", spmsg); console.log("3", user); console.log("4", Active);

  return (
    <>

      <AdminNavbar>
        {
          data ?
            <div class="container">
              <div class="row ">
                <div class="col-md-4 col-xl-3">
                  <div class="card bg-c-blue order-card">
                    <div class="card-block">
                      <h6 class="m-b-20">Total Customers</h6>
                      <h2 class="text-right"><i class="fa-solid fa-user"></i><span className='mx-3'>{data.totaluser ? data.totaluser : 500}</span></h2>
                      <p class="m-b-0">Total Active Customers<span class="f-right">{data.totalactiveuser ? data.totalactiveuser : 500}</span></p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-xl-3">
                  <div class="card bg-c-green order-card">
                    <div class="card-block">
                      <h6 class="m-b-20">Total Service Provider</h6>
                      <h2 class="text-right"><i class="fa-solid fa-users"></i> <span className='mx-3'>{data.totalsp ? data.totalsp : 500}</span></h2>
                      <p class="m-b-0">Active Service Provider<span class="f-right">{data.totalactiveusp ? data.totalactiveusp : 500}</span></p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-xl-3">
                  <div class="card bg-c-yellow order-card">
                    <div class="card-block">
                      <h6 class="m-b-20">Total Sub Service</h6>
                      <h2 class="text-right"><i class="fa-solid fa-business-time"></i><span className='mx-3'>{data.totalsub}</span></h2>
                      <p class="m-b-0">Total Main Service<span class="f-right" >{data.totalmain}</span></p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 col-xl-3">
                  <div class="card bg-c-pink order-card">
                    <div class="card-block">
                      <h6 class="m-b-20">Total Order</h6>
                      <h2 class="text-right"><i class="fa fa-credit-card f-left"></i><span className='mx-3'>{data.totalorder}</span></h2>
                      <p class="m-b-0">Completed Orders<span class="f-right">{data.completed}</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-lg-6">
                  <div class="mb-3 card">
                    <div class="card-header-tab card-header-tab-animation card-header">
                      <div class="card-header-title">
                        <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"><b>User Messges</b>  </i>

                      </div>

                    </div>
                    <div class="card-body">
                      <div class="tab-content">
                        <div class="tab-pane fade show active" id="tabs-eg-77">
                          <div class="card mb-3 widget-chart widget-chart2 text-left w-100">
                            <div class="widget-chat-wrapper-outer">
                              {/* <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                <div className="row">
                                  <div className="mixed-chart" style={{ overflowX: "auto" }}>
                                    <Chart
                                      options={state.options}
                                      series={state.series}
                                      type="bar"
                                      width="500"
                                    />
                                  </div>
                                </div>
                              </div> */}
                              {/* <div class="widget-chat-wrapper-outer">
                                <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                  <div className="row">
                                    <div className="mixed-chart mx-auto" style={{ overflowX: "auto" }}>
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
                              </div> */}
                            </div>
                          </div>
                          {/* <h6 class="text-muted  text-uppercase font-size-md opacity-5 font-weight-normal"></h6> */}
                          <div class="scroll-area-sm overflow-auto">
                            <div class="scrollbar-container" style={{ height: "500px" }}>
                              <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                {
                                  (user.length > 0) ?
                                    user.map((key) => (
                                      <li class="list-group-item">
                                        <div class="widget-content p-0">
                                          <div class="widget-content-wrapper d-flex align-items-center">
                                            <div class="widget-content-left mr-3">
                                              <img width="42" class="rounded-circle" src="images/AVTAR.jpg" alt="" />
                                            </div>
                                            <div class="widget-content-left ms-3">
                                              <div class="widget-heading"><b>{key.firstname} {key.lastname}</b></div>
                                              <div class="widget-subheading"><b>Email:</b>{key.email}</div>
                                              <div class="widget-content-right">
                                                <div class="font-size-xlg text-muted">
                                                  <span>{key.message}</span>
                                                </div>
                                              </div>
                                            </div>

                                          </div>
                                        </div>
                                      </li>
                                    ))

                                    :
                                    <li></li>
                                }
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
                        <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"><b>Service Provider Messges</b>  </i>

                      </div>

                    </div>
                    <div class="card-body">
                      <div class="tab-content">
                        <div class="tab-pane fade show active" id="tabs-eg-77">
                          <div class="card mb-3 widget-chart widget-chart2 text-left w-100">
                            {/* <div class="widget-chat-wrapper-outer">
                              <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                <div className="row">
                                  <div className="mixed-chart" style={{ overflowX: "auto" }}>
                                    <Chart
                                      options={state.options}
                                      series={state.series}
                                      type="bar"
                                      width="500"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div> */}
                            <div class="widget-chat-wrapper-outer">
                              {/* <div class="widget-chat-wrapper-outer">
                                <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                  <div className="row">
                                    <div className="mixed-chart mx-auto" style={{ overflowX: "auto" }}>
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
                              </div> */}
                              {/* <div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                <div className="row">
                                  <div className="mixed-chart mx-auto" style={{ overflowX: "auto" }}>
                                    <Chart
                                      options={state2.options}
                                      series={state2.series}
                                      type="donut"
                                      width="460"
                                      className="mx-auto"

                                    />
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                          {/* <h6 class="text-muted  text-uppercase font-size-md opacity-5 font-weight-normal"></h6> */}
                          <div class="scroll-area-sm overflow-auto">
                            <div class="scrollbar-container" style={{ height: "500px" }}>
                              <ul class="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                {
                                  (spmsg.length > 0) ?
                                    spmsg.map((key) => (
                                      <li class="list-group-item">
                                        <div class="widget-content p-0">
                                          <div class="widget-content-wrapper d-flex align-items-center">
                                            <div class="widget-content-left mr-3">
                                              <img width="42" class="rounded-circle" src="images/AVTAR.jpg" alt="" />
                                            </div>
                                            <div class="widget-content-left ms-3">
                                              <div class="widget-heading"><b>{key.firstname} {key.lastname}</b></div>
                                              <div class="widget-subheading"><b>Email:</b>{key.email}</div>
                                              <div class="widget-content-right">
                                                <div class="font-size-xlg text-muted">
                                                  <span>{key.message}</span>
                                                </div>
                                              </div>
                                            </div>

                                          </div>
                                        </div>
                                      </li>
                                    ))

                                    :
                                    <li></li>
                                }

                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {(Active.length > 0) ?
                <div class="row">
                  <div class="col-md-12">
                    <div class="main-card mb-3 card">
                      <div class="card-header">
                        Active Services
                      </div>
                      <div class="table-responsive">
                        <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                          <thead>
                            <tr>
                              <th class="text-center">Index</th>

                              <th>Service Name</th>
                              <th class="text-center">Service  Provider  Name</th>
                              <th class="text-center">User Name</th>
                              {/* <th class="text-center"></th> */}
                            </tr>
                          </thead>
                          <tbody>


                            <>

                              {
                                Active.map((key) => (
                                  <>
                                    <tr>
                                      <td class="text-center text-muted">{index++}</td>
                                      <td >
                                        <div class="  p-0 ">
                                          <div class="d-flex">
                                            <div class=" mr-3">
                                              <div class="">
                                                <img width="60" height="60" class="rounded-circle" src={"http://localhost:4000/image/" + key.serviceid.subname.image} alt="" />
                                              </div>
                                            </div>
                                            <div class="ms-5">
                                              <div class="widget-heading"><b>{key.serviceid.subname.serviceid.s_name}</b></div>
                                              <div class="widget-subheading opacity-7">{key.serviceid.subname.subname}</div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td class="text-center">{key.spid.firstname} {key.spid.lastname}</td>
                                      <td class="text-center">
                                        {key.userid.firstname} {key.userid.lastname}
                                      </td>
                                      <br />
                                      {/* <td class="text-center">
                                <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Details</button>
                              </td> */}
                                    </tr>
                                  </>
                                ))

                              }
                            </>





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
                :
                <div></div>
              }
            </div>

            :
            <>

              <div className="d-flex justify-content-center" style={{ marginTop: "15%" }}>
                <div class="spinner-grow text-dark" role="status">
                  <span class="sr-only">Loading...</span>
                </div>

              </div>
              <br />
              <br />
              <p className='text-center'>Your Network is interrupted!! Check Your Network</p>

            </>
        }




      </AdminNavbar>

    </>
  )
}

export default AdminDashboard
