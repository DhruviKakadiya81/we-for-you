import React from 'react'
import { AdminNavbar } from './AdminNavbar'

const AdminManageCustomers = () => {
  return (
    <AdminNavbar>
    <FormGroup className='main_container mx-auto'>
                    <Typography variant="h4" className='add_ser_heading'>Add Service</Typography>
                    <div className='mt-5 mx-auto'>
                                <FormControl className='mb-3 detail_container'  >
                                    <InputLabel className='mx-3' >Enter Service Name</InputLabel>
                                    <Input type="text" name="name" onChange={(event)=>setsname(event.target.value)} className='mx-3 my-3'  />
                                    </FormControl><br/>
                                    <FormControl className='mb-3 detail_container'>
                                 <Input type='file' name='image' onChange={(event)=>sets_icon(event.target.files[0])} className='mx-3 my-3 ser_image' style={{borderBottom:"none"}}/>
                                    </FormControl><br/>
                                    <FormControl className='mb-3 mx-auto'>
                                    <Button type='submit' className='add_btn my-3 px-5 py-3 ' onClick={handleAddServices} style={{backgroundColor:"rgb(50,50,50)",color:"white",marginLeft:"150px"}}>Add Agent</Button>
                                </FormControl>
                    </div>
                  
      </FormGroup>




    
    </AdminNavbar>
  )
}

export default AdminManageCustomers
