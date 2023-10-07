import {useState, useEffect} from 'react'
import { useLazyQuery } from '@apollo/client';
import BlogCard from '../components/BlogCard';
import { GET_ALL_BLOGS, GET_ALL_BLOGS_NAME_NEWEST, GET_ALL_BLOGS_NAME_OLDEST, GET_ALL_BLOGS_NEWEST, GET_ALL_BLOGS_OLDEST } from '../gql/queries';
import { GetAllBlogsQuery } from '../__generated__/graphql';
import { useLocation, useSearchParams } from 'react-router-dom';
import Select from 'react-select';

const options = [
    { value: 'NAME ASC', label: 'A to z' },
    { value: 'NAME DESC', label: 'Z to a' },
    { value: 'NEW ASC', label: 'Newest' },
    { value: 'NEW DESC', label: 'Oldest' }
  ]

export default function AllBlogsPage() {
    const [blogFilter, setBlogFilter] = useState({
        type: "",
        sort: "",
    })
    const [blogs, setBlogs] = useState<GetAllBlogsQuery | undefined>(undefined)
    const [filter, setFilter] = useState({
        value: "",
        label: "filter by"
    })


    // !example const [getData, { called, loading }] = useLazyQuery(GET_ALL_BLOGS);
    //normal fitlering
    const [getData] = useLazyQuery(GET_ALL_BLOGS);
    const [getOldestPosts] = useLazyQuery(GET_ALL_BLOGS_OLDEST);
    const [GetNewPosts] = useLazyQuery(GET_ALL_BLOGS_NEWEST);
    const [getNameOldestPosts] = useLazyQuery(GET_ALL_BLOGS_NAME_OLDEST);
    const [GetNameNewPosts] = useLazyQuery(GET_ALL_BLOGS_NAME_NEWEST);

    useEffect(() => {
        console.log(blogFilter);
        
        if(!blogFilter.type){
            const updateData = async () => {
                //get default data
                const data = await getData()
                setBlogs(data.data)
            }
            
            updateData()  
        }else if(blogFilter.sort === "NAME"){
            if(blogFilter.type === "DESC"){
                //get asc name
                const updateData = async () => {
                    const data = await GetNameNewPosts()
                    setBlogs(data.data)
                }
                
                updateData() 
            }else{
                // get desc name
                const updateData = async () => {
                    const data = await getNameOldestPosts()
                    setBlogs(data.data)
                }
                
                updateData() 
            }
        }else if(blogFilter.sort === "NEW"){
            if(blogFilter.type === "DESC"){
                //get asc createdAt
                const updateData = async () => {
                    const data = await GetNewPosts()
                    setBlogs(data.data)
                }
                
                updateData() 
            }else{
                // get desc createdAt
                const updateData = async () => {
                    const data = await getOldestPosts()
                    setBlogs(data.data)
                    GetNameNewPosts()
                }
                
                updateData() 
            }
        }
    }, [blogFilter])
    
    
  return (
    <div
    className='p-3 max-w-screen-lg mx-auto'
    >
        <div
        className='flex justify-between items-center'
        >
            <h1
            className='text-3xl my-3 font-semibold'
            >
                All blogs
            </h1>
            <Select 
            options={options} 
            value={filter}
            onChange={(e) => {
                console.log(e);
                const items = e?.value.split(" ")
                
                if(!items) return

                setBlogFilter({
                    sort: items[0] ? items[0] : "",
                    type: items[1] ? items[1] : "",
                })
                setFilter({
                    label: e?.label ? e.label : "filter by",
                    value: e?.value ? e.value : "filter by",
                })
            }}
            />
        </div>
        <section
        className='blog-grid'
        >
            {blogs && blogs?.posts.map(p => (
              <BlogCard
              key={p.id} 
              {...p}
              />
            ))}
        </section>
    </div>
  )
}
