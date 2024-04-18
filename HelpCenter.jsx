import React from 'react';
import { FaRegMessage } from "react-icons/fa6";
import SearchBar from './SearchBar';



const HelpCenter = () => {
  return (
    <div className="relative h-screen"style={{
      letterSpacing:"1px"
    }}>
      <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('https://theme.zdassets.com/theme_assets/16582269/21665b4d0974ffe79a32471492f21e51f5d22c3b.jpg')", height: 'calc(50vh + 100px)' }}></div>
      <div className="container relative py-16 mx-auto">
        <h1 className="flex justify-center text-white" style={{ marginTop: '76px', fontWeight: '600', fontSize: '35px', position: 'relative', left: '24px' }}>
          Welcome to Lovisa's Help Centre
        </h1>
        <div style={{
          display:"flex",
          justifyContent:"center"
        }}>
        <SearchBar />
        </div>
      </div>
      
      <div className="relative flex flex-col min-h-screen pb-20 centered-grid" style={{
        top:"155px"
      }}>
        
        <div className="relative z-10 mx-auto mb-8 grid-container max-w-7xl">
          <div className="container" style={{
            width:"70rem",
            height:"0.6rem",
            marginBottom:"130px"
          }}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3" >
              <div className="py-10 bg-white border border-gray-300 rounded-sm ">
                <h2 className="mb-2 text-xl text-center" style={{fontWeight:"500"}}>Order & Product</h2>
              </div>
              <div className="py-10 bg-white border border-gray-300 rounded-sm ">
                <h2 className="mb-2 text-xl font-bold text-center"style={{fontWeight:"500"}}>Delivery</h2>
              </div>
              <div className="py-10 bg-white border border-gray-300 rounded-sm ">
                <h2 className="mb-2 text-xl font-bold text-center"style={{fontWeight:"500"}}>Returns & Exchanges</h2>
              </div>
            </div>
          </div>
          <div className="container mb-8" >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="py-10 bg-white border border-gray-300 rounded-sm ">
                <h2 className="mb-2 text-xl font-bold text-center"style={{fontWeight:"500"}}>Piercing Studio</h2>
              </div>
              <div className="py-10 bg-white border border-gray-300 rounded-sm ">
                <h2 className="mb-2 text-xl font-bold text-center"style={{fontWeight:"500"}}>Care & Size Guides</h2>
              </div>
              <div className="py-10 bg-white border border-gray-300 rounded-sm ">
                <h2 className="mb-2 text-xl font-bold text-center"style={{fontWeight:"500"}}>Account & Technical</h2>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="grid grid-cols-1 md:grid-cols-1">
              <div className="py-10 bg-white border border-gray-300 rounded-sm ">
                <h2 className="text-xl font-bold text-center"style={{fontWeight:"500"}}>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <h2 className='text-center' style={{
          fontSize:"18px", fontWeight:"600"
        }}>Recent activity</h2>
        <div style={{
          marginTop:"2.5rem",
          marginRight:"12rem",
          marginLeft:"12rem"
        }}>
            <p style={{
              fontWeight:"500",
              marginBottom:"0.5rem",
              fontSize:"16px"
            }}><a href="#">Delivery FAQs</a></p>
            <p
            style={{
              marginBottom:"1.2rem",
              fontSize:"14px"
            }}
            ><a href="#">My order is being returned to the sender, what happens now?</a><span style={{
              marginLeft:"30.5rem",
              fontSize:"12px",
              color:'gray'
            }}>Article created 23 days ago<span style={{
              display: "inline-block",
              marginLeft: "0.5rem",
              fontSize: "12px"
            }}><FaRegMessage style={{color: "#e68ec1"}}/></span> 0</span></p>
        </div>
        <hr style={{
          width: "calc(100% - 24rem)",
          margin: "0 auto"
        }}/>
        <div style={{
          marginTop:"2.5rem",
          marginRight:"12rem",
          marginLeft:"12rem"
        }}>
            <p style={{
              fontWeight:"500",
              marginBottom:"0.5rem",
              fontSize:"16px"
            }}><a href="#">Click and Collect</a></p>
            <p
            style={{
              marginBottom:"1.2rem",
              fontSize:"14px"
            }}
            ><a href="#">Where is my Click and Collect order? I haven't received a notification.</a><span style={{
              marginLeft:"27rem",
              fontSize:"12px",
              color:'gray'
            }}>Article created 23 days ago<span style={{
              display: "inline-block",
              marginLeft: "0.5rem",
              fontSize: "12px"
            }}><FaRegMessage style={{color: "#e68ec1"}}/></span> 0</span></p>
        </div>
        <hr style={{
          width: "calc(100% - 24rem)",
          margin: "0 auto"
        }}/>
        <div style={{
          marginTop:"2.5rem",
          marginRight:"12rem",
          marginLeft:"12rem"
        }}>
            <p style={{
              fontWeight:"500",
              marginBottom:"0.5rem",
              fontSize:"16px"
            }}><a href="#">Click and Collect</a></p>
            <p
            style={{
              marginBottom:"1.2rem",
              fontSize:"14px"
            }}
            ><a href="#">What is the Click and Collect Process (AUS Only)?</a><span style={{
              marginLeft:"36rem",
              fontSize:"12px",
              color:'gray'
            }}>Article created 23 days ago<span style={{
              display: "inline-block",
              marginLeft: "0.5rem",
              fontSize: "12px"
            }}><FaRegMessage style={{color: "#e68ec1"}}/></span> 0</span></p>
        </div>
        <hr style={{
          width: "calc(100% - 24rem)",
          margin: "0 auto"
        }}/>
        <div style={{
          marginTop:"2.5rem",
          marginRight:"12rem",
          marginLeft:"12rem"
        }}>
            <p style={{
              fontWeight:"500",
              marginBottom:"0.5rem",
              fontSize:"16px"
            }}><a href="#">Order Issue</a></p>
            <p
            style={{
              marginBottom:"1.2rem",
              fontSize:"14px"
            }}
            ><a href="#">I received the wrong item, what should I do?</a><span style={{
              marginLeft:"38rem",
              fontSize:"12px",
              color:'gray'
            }}>Article created 23 days ago<span style={{
              display: "inline-block",
              marginLeft: "0.5rem",
              fontSize: "12px"
            }}><FaRegMessage style={{color: "#e68ec1"}}/></span> 0</span></p>
        </div>
        <hr style={{
          width: "calc(100% - 24rem)",
          margin: "0 auto"
        }}/>
        <div style={{
          marginTop:"2.5rem",
          marginRight:"12rem",
          marginLeft:"12rem"
        }}>
            <p style={{
              fontWeight:"500",
              marginBottom:"0.5rem",
              fontSize:"16px"
            }}><a href="#">Update Details</a></p>
            <p
            style={{
              marginBottom:"1.2rem",
              fontSize:"14px"
            }}
            ><a href="#">How do I unsubscribe from your mailing list?</a><span style={{
              marginLeft:"38rem",
              fontSize:"12px",
              color:'gray'
            }}>Article created 23 days ago<span style={{
              display: "inline-block",
              marginLeft: "0.5rem",
              fontSize: "12px"
            }}><FaRegMessage style={{color: "#e68ec1"}}/></span> 0</span></p>
        </div>
        <hr style={{
          width: "calc(100% - 24rem)",
          margin: "0 auto"
        }}/>
      </div>
      <button style={{
        marginTop:"1.8rem",
        marginLeft:"12rem",
        padding:".3rem ",
        color:"white",
        backgroundColor:"#ff6666",
        border:"none",
        borderRadius:"5px",
        width:"6rem",
        fontSize:"14px"
      }}>See more</button>
    </div>
  );
};

export default HelpCenter;