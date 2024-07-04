import {React,useEffect } from 'react';
import NavBar from '../Navbar/NavBar';
import ready from '../panda/ready.png';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page6 = () => {
  const navigate = useNavigate()

  const nextpage=()=>{

    navigate('/instruction')
  }
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className='container mx-auto bg-[#39383a] h-[100vh] lg:bg-white  overflow-hidden'>
      <div className='hidden lg:block mx-8 mt-10'>
        <NavBar />
        <div className='relative'>
          <div className='flex relative justify-center w-full my-24'>
            <div>
              <img src={ready} className='max-h-[75vh]' alt="" />
              <div className='w-full max-w-sm mx-auto'>
                <button onClick={nextpage} className='bg-[#fbbb01] hover:bg-[#fbc835] px-3 py-2 rounded text-[#fffefe] font-semibold w-full my-2'>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-32 left-1/2 transform translate-x-1/2'>
        <svg data-aos="fade-left" width="307" height="195" viewBox="0 0 307 195" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M116.623 139.969C115.577 149.22 123.809 155.895 136.108 157.961C148.407 160.027 161.643 156.957 162.689 147.707C163.735 138.456 154.396 131.197 142.097 129.131C127.231 125.275 117.96 128.144 116.623 139.969Z" fill="white" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M245.88 18.9991C249.974 24.7672 277.58 16.8463 282.114 21.5946C285.66 25.8959 281.656 36.7527 282.896 40.31C284.136 43.8673 299.584 51.2106 300.965 54.9416C302.345 58.6726 299.855 61.8813 299.315 65.7126C298.775 69.5438 304.498 72.5049 305.044 77.185C305.589 81.8652 302.81 86.5377 299.036 88.3645C295.263 90.1913 295.542 96.8774 291.221 102.355C286.9 107.832 280.75 111.413 273.515 114.145C266.279 116.877 258.226 112.588 253.686 112.825C249.146 113.062 243.877 116.778 238.714 118.858C233.551 120.939 225.021 109.431 217.406 111.459C209.791 113.486 180.89 112.821 174.149 110.637C167.408 108.454 133.699 118.362 122.379 119.678C111.06 120.993 105.315 113.324 100.897 112.287C96.4787 111.25 87.3282 122.593 82.3626 125.207C77.3971 127.82 66.1617 126.958 58.5553 125C50.9489 123.043 19.1182 119.271 17.0086 114.854C14.899 110.436 15.3492 100.271 14.1817 93.2694C13.0142 86.2674 1.62035 81.6101 2.62365 76.3059C3.62695 71.0017 15.7601 64.03 16.6189 59.4577C17.4777 54.8854 13.2439 45.6892 14.8012 41.0805C16.3585 36.4717 30.9004 20.1383 37.293 18.1748C43.6856 16.2113 49.6743 21.3318 56.8786 22.0424C64.0829 22.753 74.0375 13.903 80.2479 11.7679C86.4584 9.63279 102.801 19.6459 106.119 19.4728C109.436 19.2996 111.229 11.9621 119.14 12.817C127.05 13.6719 133.152 21.5029 139.772 20.7952C146.392 20.0876 164.971 8.25204 173.041 8.73641C179.497 9.1239 192.11 14.0957 197.609 16.5332C203.502 19.2166 231.401 6.79395 236.311 9.03015C241.222 11.2664 241.785 13.2309 245.88 18.9991Z" fill="white" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M99.9308 167.098C99.3069 172.614 105.563 176.821 114.776 178.369C123.989 179.916 133.813 178.41 134.437 172.894C135.061 167.378 127.969 162.794 118.756 161.246C107.597 158.562 100.728 160.047 99.9308 167.098Z" fill="white" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M107.234 187.885C106.938 191.801 103.599 193.644 99.1738 193.149C94.7486 192.653 90.3638 189.944 90.6592 186.028C90.9546 182.112 94.7203 180.15 99.1456 180.646C104.591 180.687 107.611 182.88 107.234 187.885Z" fill="white" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M86.3891 57.68C86.7944 57.68 87.1571 57.7867 87.4771 58C87.8184 58.2133 88.0211 58.5867 88.0851 59.12C88.3411 60.8053 88.5011 62.4907 88.5651 64.176C88.6504 65.84 88.6931 67.728 88.6931 69.84C88.6931 70.736 88.6184 72.368 88.4691 74.736C89.4078 74.8213 90.1331 74.864 90.6451 74.864C91.0078 74.864 91.8291 74.8107 93.1091 74.704C93.8558 74.5973 94.5064 74.544 95.0611 74.544C95.5731 74.544 96.0424 74.5973 96.4691 74.704C96.8958 74.7893 97.3331 74.9387 97.7811 75.152C98.2291 75.408 98.4531 75.8027 98.4531 76.336C98.4531 76.7627 98.3144 77.1467 98.0371 77.488C97.7811 77.8293 97.4718 78 97.1091 78C96.8531 78 96.4478 77.9573 95.8931 77.872C94.8904 77.7227 93.9304 77.648 93.0131 77.648C92.7144 77.648 92.3731 77.6693 91.9891 77.712C91.6264 77.7333 91.3598 77.744 91.1891 77.744C90.6771 77.808 90.1651 77.84 89.6531 77.84C88.6078 77.84 87.6691 77.7867 86.8371 77.68C86.4104 77.6373 85.9838 77.4773 85.5571 77.2C85.1304 76.9013 84.9171 76.4747 84.9171 75.92C84.9171 75.6 84.9598 74.7787 85.0451 73.456C85.1944 71.2587 85.2691 69.584 85.2691 68.432C85.2691 67.536 85.2264 66.5973 85.1411 65.616C85.0558 64.6347 85.0024 64.016 84.9811 63.76C84.7891 61.9467 84.6931 60.4533 84.6931 59.28C84.6931 58.7253 84.8211 58.32 85.0771 58.064C85.3544 57.808 85.7918 57.68 86.3891 57.68ZM100.049 71.216C100.049 70.4053 100.199 69.5947 100.497 68.784C100.796 67.952 101.191 67.1947 101.681 66.512C102.172 65.8293 102.951 65.2747 104.017 64.848C105.084 64.4 106.033 64.176 106.865 64.176C107.719 64.176 108.583 64.2933 109.457 64.528C110.353 64.7627 110.972 65.1253 111.313 65.616C112.103 66.7253 112.497 67.8133 112.497 68.88C112.497 69.456 112.369 69.9467 112.113 70.352C111.879 70.7573 111.537 71.1947 111.089 71.664C110.727 72.048 110.151 72.304 109.361 72.432C108.593 72.56 107.825 72.624 107.057 72.624C106.567 72.624 105.969 72.5813 105.265 72.496C104.561 72.3893 103.879 72.2613 103.217 72.112C103.26 72.5387 103.367 72.9547 103.537 73.36C103.708 73.7653 103.911 74.0747 104.145 74.288C104.572 74.6933 105.009 74.9493 105.457 75.056C105.927 75.1627 106.524 75.216 107.249 75.216C108.017 75.216 108.732 75.088 109.393 74.832C109.927 74.64 110.364 74.544 110.705 74.544C111.111 74.544 111.42 74.672 111.633 74.928C111.847 75.1627 111.953 75.472 111.953 75.856C111.953 76.3893 111.644 76.8267 111.025 77.168C110.407 77.5093 109.692 77.7653 108.881 77.936C108.092 78.0853 107.452 78.16 106.961 78.16C105.959 78.16 104.988 77.9787 104.049 77.616C103.111 77.2533 102.332 76.7413 101.713 76.08C101.201 75.4827 100.796 74.768 100.497 73.936C100.199 73.0827 100.049 72.176 100.049 71.216ZM107.025 66.896C106.556 66.896 106.087 66.992 105.617 67.184C105.148 67.3547 104.764 67.6 104.465 67.92C104.081 68.3253 103.815 68.656 103.665 68.912C103.537 69.1467 103.452 69.4773 103.409 69.904C103.943 70.0747 105.052 70.16 106.737 70.16C107.655 70.16 108.359 70.0213 108.849 69.744C109.361 69.4667 109.617 69.104 109.617 68.656C109.617 68.208 109.34 67.8027 108.785 67.44C108.231 67.0773 107.644 66.896 107.025 66.896ZM115.555 66.928C115.257 66.8853 115.011 66.7573 114.819 66.544C114.649 66.3307 114.563 66.0747 114.563 65.776C114.563 65.6267 114.595 65.4667 114.659 65.296C114.745 65.1253 114.862 64.976 115.011 64.848C115.289 64.5707 116.035 64.432 117.251 64.432C117.422 63.6 117.507 62.7573 117.507 61.904C117.507 61.584 117.497 61.3067 117.475 61.072C117.454 60.8373 117.443 60.656 117.443 60.528C117.443 60.0587 117.614 59.7067 117.955 59.472C118.318 59.2373 118.723 59.12 119.171 59.12C119.726 59.12 120.099 59.2587 120.291 59.536C120.505 59.8133 120.611 60.3253 120.611 61.072C120.611 62.1813 120.515 63.2693 120.323 64.336C120.665 64.336 121.134 64.3147 121.731 64.272C122.542 64.2293 123.129 64.208 123.491 64.208C123.854 64.208 124.163 64.304 124.419 64.496C124.697 64.6667 124.835 64.912 124.835 65.232C124.835 66.064 124.462 66.5547 123.715 66.704C122.926 66.896 121.699 67.0133 120.035 67.056C119.971 67.888 119.939 68.7947 119.939 69.776C119.939 71.312 120.035 72.5707 120.227 73.552C120.355 74.2347 120.569 74.736 120.867 75.056C121.187 75.3547 121.657 75.504 122.275 75.504C122.638 75.504 123.011 75.408 123.395 75.216C123.651 75.0667 123.886 74.992 124.099 74.992C124.398 74.992 124.611 75.088 124.739 75.28C124.889 75.472 124.963 75.728 124.963 76.048C124.963 76.6453 124.643 77.1467 124.003 77.552C123.363 77.936 122.542 78.128 121.539 78.128C120.921 78.128 120.291 77.9787 119.651 77.68C119.033 77.3813 118.51 77.008 118.083 76.56C118.019 76.496 117.902 76.2507 117.731 75.824C117.561 75.3973 117.411 74.9387 117.283 74.448C117.07 73.4453 116.963 72.0373 116.963 70.224C116.963 69.4347 117.006 68.3787 117.091 67.056L115.555 66.928ZM128.547 60.816C128.312 60.816 128.141 60.7733 128.035 60.688C127.757 60.5173 127.523 60.3147 127.331 60.08C127.16 59.8453 127.075 59.504 127.075 59.056C127.096 58.736 127.171 58.4587 127.299 58.224C127.427 57.968 127.608 57.7867 127.843 57.68C128.291 57.4453 128.867 57.328 129.571 57.328C130.083 57.328 130.477 57.52 130.755 57.904C131.053 58.2667 131.203 58.7147 131.203 59.248C131.203 59.888 131.011 60.6347 130.627 61.488C130.264 62.32 129.901 62.9707 129.539 63.44C129.261 63.76 128.952 64.0373 128.611 64.272C128.269 64.5067 127.971 64.624 127.715 64.624C127.203 64.624 126.883 64.5493 126.755 64.4C126.648 64.2293 126.595 63.9413 126.595 63.536C126.595 63.3653 126.819 63.0987 127.267 62.736C127.629 62.416 127.853 62.192 127.939 62.064C128.259 61.6373 128.493 61.2213 128.643 60.816H128.547ZM142.734 71.088C142.905 71.1947 143.235 71.3973 143.726 71.696C144.238 71.9733 144.579 72.304 144.75 72.688C144.921 73.072 145.006 73.6053 145.006 74.288C145.006 75.056 144.782 75.7387 144.334 76.336C143.886 76.912 143.31 77.36 142.606 77.68C142.115 77.8933 141.582 78.0213 141.006 78.064C140.451 78.1067 139.779 78.128 138.99 78.128C138.563 78.128 138.009 78.064 137.326 77.936C136.665 77.808 136.206 77.6907 135.95 77.584C135.267 77.2 134.691 76.752 134.222 76.24C133.753 75.728 133.518 75.2053 133.518 74.672C133.518 74.2453 133.657 73.904 133.934 73.648C134.211 73.392 134.574 73.264 135.022 73.264C135.257 73.264 135.481 73.328 135.694 73.456C135.929 73.5627 136.089 73.6907 136.174 73.84C136.409 74.3947 136.803 74.8107 137.358 75.088C137.913 75.3653 138.478 75.504 139.054 75.504C141.081 75.504 142.094 75.1413 142.094 74.416C142.094 74.224 142.041 74.0747 141.934 73.968C141.849 73.84 141.721 73.712 141.55 73.584C141.273 73.392 140.878 73.1893 140.366 72.976C139.875 72.7627 139.438 72.6027 139.054 72.496C138.179 72.304 137.326 72.016 136.494 71.632C135.726 71.248 135.097 70.7467 134.606 70.128C134.115 69.488 133.87 68.7093 133.87 67.792C133.87 67.2373 134.073 66.6933 134.478 66.16C134.905 65.6053 135.395 65.1893 135.95 64.912C136.334 64.7627 136.963 64.6027 137.838 64.432C138.713 64.2613 139.31 64.176 139.63 64.176C140.121 64.176 140.654 64.2293 141.23 64.336C141.806 64.4213 142.243 64.5707 142.542 64.784C143.118 65.1253 143.587 65.488 143.95 65.872C144.313 66.2347 144.494 66.6507 144.494 67.12C144.494 67.3547 144.441 67.6107 144.334 67.888C144.227 68.144 144.099 68.304 143.95 68.368C143.63 68.5173 143.257 68.592 142.83 68.592C142.638 68.592 142.478 68.5387 142.35 68.432C142.243 68.3253 142.094 68.1547 141.902 67.92C141.667 67.5573 141.443 67.344 141.23 67.28C140.974 67.216 140.601 67.1413 140.11 67.056C139.619 66.9493 139.289 66.896 139.118 66.896C138.585 66.896 138.073 67.0027 137.582 67.216C137.113 67.4293 136.878 67.7173 136.878 68.08C136.878 68.5067 137.23 68.8693 137.934 69.168C138.382 69.3813 138.873 69.5627 139.406 69.712C139.961 69.8613 140.302 69.9573 140.43 70C140.729 70.064 141.113 70.2133 141.582 70.448C142.073 70.6827 142.457 70.896 142.734 71.088ZM170.508 63.184C170.188 62.9707 169.878 62.7253 169.58 62.448C168.812 61.8507 168.161 61.4133 167.628 61.136C167.094 60.8373 166.497 60.688 165.836 60.688C164.897 60.688 163.958 60.8053 163.02 61.04C162.102 61.2747 161.345 61.6053 160.748 62.032C159.852 62.6933 159.244 63.568 158.924 64.656C158.604 65.7227 158.444 67.0347 158.444 68.592C158.444 70.2347 158.956 71.696 159.98 72.976C160.598 73.68 161.345 74.224 162.22 74.608C163.116 74.992 164.012 75.184 164.908 75.184C166.977 75.184 168.513 74.608 169.516 73.456C170.241 72.5387 170.604 71.4187 170.604 70.096C170.604 69.8613 170.433 69.7013 170.092 69.616C169.75 69.5307 169.26 69.488 168.62 69.488C168.3 69.488 167.798 69.4453 167.116 69.36C166.924 69.3387 166.71 69.3173 166.476 69.296C166.262 69.2747 166.038 69.264 165.804 69.264C165.185 69.264 164.694 69.1467 164.332 68.912C163.969 68.6773 163.788 68.3787 163.788 68.016C163.788 67.504 163.958 67.1307 164.3 66.896C164.641 66.64 165.1 66.512 165.676 66.512C166.337 66.512 167.35 66.5547 168.716 66.64C169.996 66.7253 170.902 66.768 171.436 66.768C172.182 66.768 172.78 67.0027 173.228 67.472C173.697 67.9413 173.932 68.624 173.932 69.52C173.932 70.352 173.75 71.3227 173.388 72.432C173.025 73.5413 172.513 74.5333 171.852 75.408C171.212 76.2827 170.262 76.9547 169.004 77.424C167.766 77.8933 166.401 78.128 164.908 78.128C163.692 78.128 162.486 77.9147 161.292 77.488C160.097 77.04 159.094 76.4427 158.284 75.696C157.302 74.7787 156.524 73.6907 155.948 72.432C155.393 71.152 155.116 69.8827 155.116 68.624C155.116 66.6827 155.457 64.8693 156.14 63.184C156.844 61.4773 157.91 60.1547 159.34 59.216C159.98 58.7893 160.961 58.4373 162.284 58.16C163.606 57.8827 164.769 57.744 165.772 57.744C167.18 57.744 168.46 58.0533 169.612 58.672C170.764 59.2907 171.66 60.0587 172.3 60.976C172.556 61.36 172.684 61.7013 172.684 62C172.684 62.3413 172.534 62.6613 172.236 62.96C171.937 63.2587 171.638 63.408 171.34 63.408C171.212 63.408 171.062 63.3867 170.892 63.344C170.721 63.3013 170.593 63.248 170.508 63.184ZM189.913 67.728C190.084 68.0267 190.223 68.464 190.329 69.04C190.436 69.5947 190.489 70.096 190.489 70.544C190.489 71.12 190.425 71.76 190.297 72.464C190.169 73.168 190.052 73.712 189.945 74.096C188.473 76.784 186.297 78.128 183.417 78.128C182.351 78.128 181.263 77.776 180.153 77.072C179.044 76.368 178.276 75.5573 177.849 74.64C177.273 72.8267 176.985 71.664 176.985 71.152C176.985 70.2987 177.167 69.392 177.529 68.432C177.913 67.472 178.393 66.64 178.969 65.936C179.353 65.4453 180.015 65.0293 180.953 64.688C181.892 64.3253 182.745 64.144 183.513 64.144C185.007 64.144 186.265 64.432 187.289 65.008C188.335 65.5627 189.209 66.4693 189.913 67.728ZM187.129 72.88C187.236 72.6667 187.289 71.952 187.289 70.736C187.289 70.1173 187.172 69.5093 186.937 68.912C186.724 68.3147 186.404 67.8027 185.977 67.376C185.935 67.3333 185.817 67.2693 185.625 67.184C185.433 67.0773 185.167 66.9813 184.825 66.896C184.505 66.7893 184.132 66.736 183.705 66.736C182.511 66.736 181.636 67.216 181.081 68.176C180.527 69.136 180.249 70.224 180.249 71.44C180.249 71.632 180.313 72.0267 180.441 72.624C180.569 73.2213 180.665 73.6053 180.729 73.776C180.9 74.0747 181.241 74.4267 181.753 74.832C182.287 75.216 182.863 75.408 183.481 75.408C184.441 75.408 185.199 75.184 185.753 74.736C186.329 74.2667 186.788 73.648 187.129 72.88ZM198.003 76.24C198.003 76.7733 197.79 77.2747 197.363 77.744C196.937 78.192 196.467 78.416 195.955 78.416C195.358 78.416 194.814 78.256 194.323 77.936C193.833 77.5947 193.587 77.168 193.587 76.656C193.587 75.8453 193.737 75.248 194.035 74.864C194.355 74.48 194.825 74.288 195.443 74.288C196.169 74.288 196.777 74.4693 197.267 74.832C197.758 75.1733 198.003 75.6427 198.003 76.24ZM205.878 76.24C205.878 76.7733 205.665 77.2747 205.238 77.744C204.812 78.192 204.342 78.416 203.83 78.416C203.233 78.416 202.689 78.256 202.198 77.936C201.708 77.5947 201.462 77.168 201.462 76.656C201.462 75.8453 201.612 75.248 201.91 74.864C202.23 74.48 202.7 74.288 203.318 74.288C204.044 74.288 204.652 74.4693 205.142 74.832C205.633 75.1733 205.878 75.6427 205.878 76.24ZM213.753 76.24C213.753 76.7733 213.54 77.2747 213.113 77.744C212.687 78.192 212.217 78.416 211.705 78.416C211.108 78.416 210.564 78.256 210.073 77.936C209.583 77.5947 209.337 77.168 209.337 76.656C209.337 75.8453 209.487 75.248 209.785 74.864C210.105 74.48 210.575 74.288 211.193 74.288C211.919 74.288 212.527 74.4693 213.017 74.832C213.508 75.1733 213.753 75.6427 213.753 76.24ZM221.18 59.44C221.18 60.592 221.116 62.2773 220.988 64.496C220.86 66.6293 220.796 68.2613 220.796 69.392C220.796 69.6907 220.818 70.3093 220.86 71.248C220.839 71.6107 220.711 71.888 220.476 72.08C220.242 72.2507 219.964 72.336 219.644 72.336C219.303 72.336 218.994 72.2507 218.716 72.08C218.439 71.9093 218.268 71.6853 218.204 71.408C217.948 69.6587 217.82 67.568 217.82 65.136L217.852 60.144C217.852 59.3547 217.948 58.7147 218.14 58.224C218.354 57.712 218.802 57.456 219.484 57.456C220.06 57.456 220.487 57.648 220.764 58.032C221.042 58.3947 221.18 58.864 221.18 59.44ZM219.484 74C220.935 74 221.66 74.544 221.66 75.632C221.66 76.1867 221.479 76.6987 221.116 77.168C220.775 77.616 220.338 77.84 219.804 77.84C219.164 77.84 218.642 77.648 218.236 77.264C217.831 76.8587 217.628 76.3893 217.628 75.856C217.628 75.3867 217.799 74.96 218.14 74.576C218.503 74.192 218.951 74 219.484 74Z" fill="black"/>
</svg>

        </div>
      </div>
      <div className='lg:hidden relative flex items-center justify-center h-[94vh]'>
         <div className='absolute top-44 left-40'>
         <svg data-aos="fade-left" width="307" height="120" viewBox="0 0 307 195" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M116.623 139.969C115.577 149.22 123.809 155.895 136.108 157.961C148.407 160.027 161.643 156.957 162.689 147.707C163.735 138.456 154.396 131.197 142.097 129.131C127.231 125.275 117.96 128.144 116.623 139.969Z" fill="white" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M245.88 18.9991C249.974 24.7672 277.58 16.8463 282.114 21.5946C285.66 25.8959 281.656 36.7527 282.896 40.31C284.136 43.8673 299.584 51.2106 300.965 54.9416C302.345 58.6726 299.855 61.8813 299.315 65.7126C298.775 69.5438 304.498 72.5049 305.044 77.185C305.589 81.8652 302.81 86.5377 299.036 88.3645C295.263 90.1913 295.542 96.8774 291.221 102.355C286.9 107.832 280.75 111.413 273.515 114.145C266.279 116.877 258.226 112.588 253.686 112.825C249.146 113.062 243.877 116.778 238.714 118.858C233.551 120.939 225.021 109.431 217.406 111.459C209.791 113.486 180.89 112.821 174.149 110.637C167.408 108.454 133.699 118.362 122.379 119.678C111.06 120.993 105.315 113.324 100.897 112.287C96.4787 111.25 87.3282 122.593 82.3626 125.207C77.3971 127.82 66.1617 126.958 58.5553 125C50.9489 123.043 19.1182 119.271 17.0086 114.854C14.899 110.436 15.3492 100.271 14.1817 93.2694C13.0142 86.2674 1.62035 81.6101 2.62365 76.3059C3.62695 71.0017 15.7601 64.03 16.6189 59.4577C17.4777 54.8854 13.2439 45.6892 14.8012 41.0805C16.3585 36.4717 30.9004 20.1383 37.293 18.1748C43.6856 16.2113 49.6743 21.3318 56.8786 22.0424C64.0829 22.753 74.0375 13.903 80.2479 11.7679C86.4584 9.63279 102.801 19.6459 106.119 19.4728C109.436 19.2996 111.229 11.9621 119.14 12.817C127.05 13.6719 133.152 21.5029 139.772 20.7952C146.392 20.0876 164.971 8.25204 173.041 8.73641C179.497 9.1239 192.11 14.0957 197.609 16.5332C203.502 19.2166 231.401 6.79395 236.311 9.03015C241.222 11.2664 241.785 13.2309 245.88 18.9991Z" fill="white" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M99.9308 167.098C99.3069 172.614 105.563 176.821 114.776 178.369C123.989 179.916 133.813 178.41 134.437 172.894C135.061 167.378 127.969 162.794 118.756 161.246C107.597 158.562 100.728 160.047 99.9308 167.098Z" fill="white" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M107.234 187.885C106.938 191.801 103.599 193.644 99.1738 193.149C94.7486 192.653 90.3638 189.944 90.6592 186.028C90.9546 182.112 94.7203 180.15 99.1456 180.646C104.591 180.687 107.611 182.88 107.234 187.885Z" fill="white" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M86.3891 57.68C86.7944 57.68 87.1571 57.7867 87.4771 58C87.8184 58.2133 88.0211 58.5867 88.0851 59.12C88.3411 60.8053 88.5011 62.4907 88.5651 64.176C88.6504 65.84 88.6931 67.728 88.6931 69.84C88.6931 70.736 88.6184 72.368 88.4691 74.736C89.4078 74.8213 90.1331 74.864 90.6451 74.864C91.0078 74.864 91.8291 74.8107 93.1091 74.704C93.8558 74.5973 94.5064 74.544 95.0611 74.544C95.5731 74.544 96.0424 74.5973 96.4691 74.704C96.8958 74.7893 97.3331 74.9387 97.7811 75.152C98.2291 75.408 98.4531 75.8027 98.4531 76.336C98.4531 76.7627 98.3144 77.1467 98.0371 77.488C97.7811 77.8293 97.4718 78 97.1091 78C96.8531 78 96.4478 77.9573 95.8931 77.872C94.8904 77.7227 93.9304 77.648 93.0131 77.648C92.7144 77.648 92.3731 77.6693 91.9891 77.712C91.6264 77.7333 91.3598 77.744 91.1891 77.744C90.6771 77.808 90.1651 77.84 89.6531 77.84C88.6078 77.84 87.6691 77.7867 86.8371 77.68C86.4104 77.6373 85.9838 77.4773 85.5571 77.2C85.1304 76.9013 84.9171 76.4747 84.9171 75.92C84.9171 75.6 84.9598 74.7787 85.0451 73.456C85.1944 71.2587 85.2691 69.584 85.2691 68.432C85.2691 67.536 85.2264 66.5973 85.1411 65.616C85.0558 64.6347 85.0024 64.016 84.9811 63.76C84.7891 61.9467 84.6931 60.4533 84.6931 59.28C84.6931 58.7253 84.8211 58.32 85.0771 58.064C85.3544 57.808 85.7918 57.68 86.3891 57.68ZM100.049 71.216C100.049 70.4053 100.199 69.5947 100.497 68.784C100.796 67.952 101.191 67.1947 101.681 66.512C102.172 65.8293 102.951 65.2747 104.017 64.848C105.084 64.4 106.033 64.176 106.865 64.176C107.719 64.176 108.583 64.2933 109.457 64.528C110.353 64.7627 110.972 65.1253 111.313 65.616C112.103 66.7253 112.497 67.8133 112.497 68.88C112.497 69.456 112.369 69.9467 112.113 70.352C111.879 70.7573 111.537 71.1947 111.089 71.664C110.727 72.048 110.151 72.304 109.361 72.432C108.593 72.56 107.825 72.624 107.057 72.624C106.567 72.624 105.969 72.5813 105.265 72.496C104.561 72.3893 103.879 72.2613 103.217 72.112C103.26 72.5387 103.367 72.9547 103.537 73.36C103.708 73.7653 103.911 74.0747 104.145 74.288C104.572 74.6933 105.009 74.9493 105.457 75.056C105.927 75.1627 106.524 75.216 107.249 75.216C108.017 75.216 108.732 75.088 109.393 74.832C109.927 74.64 110.364 74.544 110.705 74.544C111.111 74.544 111.42 74.672 111.633 74.928C111.847 75.1627 111.953 75.472 111.953 75.856C111.953 76.3893 111.644 76.8267 111.025 77.168C110.407 77.5093 109.692 77.7653 108.881 77.936C108.092 78.0853 107.452 78.16 106.961 78.16C105.959 78.16 104.988 77.9787 104.049 77.616C103.111 77.2533 102.332 76.7413 101.713 76.08C101.201 75.4827 100.796 74.768 100.497 73.936C100.199 73.0827 100.049 72.176 100.049 71.216ZM107.025 66.896C106.556 66.896 106.087 66.992 105.617 67.184C105.148 67.3547 104.764 67.6 104.465 67.92C104.081 68.3253 103.815 68.656 103.665 68.912C103.537 69.1467 103.452 69.4773 103.409 69.904C103.943 70.0747 105.052 70.16 106.737 70.16C107.655 70.16 108.359 70.0213 108.849 69.744C109.361 69.4667 109.617 69.104 109.617 68.656C109.617 68.208 109.34 67.8027 108.785 67.44C108.231 67.0773 107.644 66.896 107.025 66.896ZM115.555 66.928C115.257 66.8853 115.011 66.7573 114.819 66.544C114.649 66.3307 114.563 66.0747 114.563 65.776C114.563 65.6267 114.595 65.4667 114.659 65.296C114.745 65.1253 114.862 64.976 115.011 64.848C115.289 64.5707 116.035 64.432 117.251 64.432C117.422 63.6 117.507 62.7573 117.507 61.904C117.507 61.584 117.497 61.3067 117.475 61.072C117.454 60.8373 117.443 60.656 117.443 60.528C117.443 60.0587 117.614 59.7067 117.955 59.472C118.318 59.2373 118.723 59.12 119.171 59.12C119.726 59.12 120.099 59.2587 120.291 59.536C120.505 59.8133 120.611 60.3253 120.611 61.072C120.611 62.1813 120.515 63.2693 120.323 64.336C120.665 64.336 121.134 64.3147 121.731 64.272C122.542 64.2293 123.129 64.208 123.491 64.208C123.854 64.208 124.163 64.304 124.419 64.496C124.697 64.6667 124.835 64.912 124.835 65.232C124.835 66.064 124.462 66.5547 123.715 66.704C122.926 66.896 121.699 67.0133 120.035 67.056C119.971 67.888 119.939 68.7947 119.939 69.776C119.939 71.312 120.035 72.5707 120.227 73.552C120.355 74.2347 120.569 74.736 120.867 75.056C121.187 75.3547 121.657 75.504 122.275 75.504C122.638 75.504 123.011 75.408 123.395 75.216C123.651 75.0667 123.886 74.992 124.099 74.992C124.398 74.992 124.611 75.088 124.739 75.28C124.889 75.472 124.963 75.728 124.963 76.048C124.963 76.6453 124.643 77.1467 124.003 77.552C123.363 77.936 122.542 78.128 121.539 78.128C120.921 78.128 120.291 77.9787 119.651 77.68C119.033 77.3813 118.51 77.008 118.083 76.56C118.019 76.496 117.902 76.2507 117.731 75.824C117.561 75.3973 117.411 74.9387 117.283 74.448C117.07 73.4453 116.963 72.0373 116.963 70.224C116.963 69.4347 117.006 68.3787 117.091 67.056L115.555 66.928ZM128.547 60.816C128.312 60.816 128.141 60.7733 128.035 60.688C127.757 60.5173 127.523 60.3147 127.331 60.08C127.16 59.8453 127.075 59.504 127.075 59.056C127.096 58.736 127.171 58.4587 127.299 58.224C127.427 57.968 127.608 57.7867 127.843 57.68C128.291 57.4453 128.867 57.328 129.571 57.328C130.083 57.328 130.477 57.52 130.755 57.904C131.053 58.2667 131.203 58.7147 131.203 59.248C131.203 59.888 131.011 60.6347 130.627 61.488C130.264 62.32 129.901 62.9707 129.539 63.44C129.261 63.76 128.952 64.0373 128.611 64.272C128.269 64.5067 127.971 64.624 127.715 64.624C127.203 64.624 126.883 64.5493 126.755 64.4C126.648 64.2293 126.595 63.9413 126.595 63.536C126.595 63.3653 126.819 63.0987 127.267 62.736C127.629 62.416 127.853 62.192 127.939 62.064C128.259 61.6373 128.493 61.2213 128.643 60.816H128.547ZM142.734 71.088C142.905 71.1947 143.235 71.3973 143.726 71.696C144.238 71.9733 144.579 72.304 144.75 72.688C144.921 73.072 145.006 73.6053 145.006 74.288C145.006 75.056 144.782 75.7387 144.334 76.336C143.886 76.912 143.31 77.36 142.606 77.68C142.115 77.8933 141.582 78.0213 141.006 78.064C140.451 78.1067 139.779 78.128 138.99 78.128C138.563 78.128 138.009 78.064 137.326 77.936C136.665 77.808 136.206 77.6907 135.95 77.584C135.267 77.2 134.691 76.752 134.222 76.24C133.753 75.728 133.518 75.2053 133.518 74.672C133.518 74.2453 133.657 73.904 133.934 73.648C134.211 73.392 134.574 73.264 135.022 73.264C135.257 73.264 135.481 73.328 135.694 73.456C135.929 73.5627 136.089 73.6907 136.174 73.84C136.409 74.3947 136.803 74.8107 137.358 75.088C137.913 75.3653 138.478 75.504 139.054 75.504C141.081 75.504 142.094 75.1413 142.094 74.416C142.094 74.224 142.041 74.0747 141.934 73.968C141.849 73.84 141.721 73.712 141.55 73.584C141.273 73.392 140.878 73.1893 140.366 72.976C139.875 72.7627 139.438 72.6027 139.054 72.496C138.179 72.304 137.326 72.016 136.494 71.632C135.726 71.248 135.097 70.7467 134.606 70.128C134.115 69.488 133.87 68.7093 133.87 67.792C133.87 67.2373 134.073 66.6933 134.478 66.16C134.905 65.6053 135.395 65.1893 135.95 64.912C136.334 64.7627 136.963 64.6027 137.838 64.432C138.713 64.2613 139.31 64.176 139.63 64.176C140.121 64.176 140.654 64.2293 141.23 64.336C141.806 64.4213 142.243 64.5707 142.542 64.784C143.118 65.1253 143.587 65.488 143.95 65.872C144.313 66.2347 144.494 66.6507 144.494 67.12C144.494 67.3547 144.441 67.6107 144.334 67.888C144.227 68.144 144.099 68.304 143.95 68.368C143.63 68.5173 143.257 68.592 142.83 68.592C142.638 68.592 142.478 68.5387 142.35 68.432C142.243 68.3253 142.094 68.1547 141.902 67.92C141.667 67.5573 141.443 67.344 141.23 67.28C140.974 67.216 140.601 67.1413 140.11 67.056C139.619 66.9493 139.289 66.896 139.118 66.896C138.585 66.896 138.073 67.0027 137.582 67.216C137.113 67.4293 136.878 67.7173 136.878 68.08C136.878 68.5067 137.23 68.8693 137.934 69.168C138.382 69.3813 138.873 69.5627 139.406 69.712C139.961 69.8613 140.302 69.9573 140.43 70C140.729 70.064 141.113 70.2133 141.582 70.448C142.073 70.6827 142.457 70.896 142.734 71.088ZM170.508 63.184C170.188 62.9707 169.878 62.7253 169.58 62.448C168.812 61.8507 168.161 61.4133 167.628 61.136C167.094 60.8373 166.497 60.688 165.836 60.688C164.897 60.688 163.958 60.8053 163.02 61.04C162.102 61.2747 161.345 61.6053 160.748 62.032C159.852 62.6933 159.244 63.568 158.924 64.656C158.604 65.7227 158.444 67.0347 158.444 68.592C158.444 70.2347 158.956 71.696 159.98 72.976C160.598 73.68 161.345 74.224 162.22 74.608C163.116 74.992 164.012 75.184 164.908 75.184C166.977 75.184 168.513 74.608 169.516 73.456C170.241 72.5387 170.604 71.4187 170.604 70.096C170.604 69.8613 170.433 69.7013 170.092 69.616C169.75 69.5307 169.26 69.488 168.62 69.488C168.3 69.488 167.798 69.4453 167.116 69.36C166.924 69.3387 166.71 69.3173 166.476 69.296C166.262 69.2747 166.038 69.264 165.804 69.264C165.185 69.264 164.694 69.1467 164.332 68.912C163.969 68.6773 163.788 68.3787 163.788 68.016C163.788 67.504 163.958 67.1307 164.3 66.896C164.641 66.64 165.1 66.512 165.676 66.512C166.337 66.512 167.35 66.5547 168.716 66.64C169.996 66.7253 170.902 66.768 171.436 66.768C172.182 66.768 172.78 67.0027 173.228 67.472C173.697 67.9413 173.932 68.624 173.932 69.52C173.932 70.352 173.75 71.3227 173.388 72.432C173.025 73.5413 172.513 74.5333 171.852 75.408C171.212 76.2827 170.262 76.9547 169.004 77.424C167.766 77.8933 166.401 78.128 164.908 78.128C163.692 78.128 162.486 77.9147 161.292 77.488C160.097 77.04 159.094 76.4427 158.284 75.696C157.302 74.7787 156.524 73.6907 155.948 72.432C155.393 71.152 155.116 69.8827 155.116 68.624C155.116 66.6827 155.457 64.8693 156.14 63.184C156.844 61.4773 157.91 60.1547 159.34 59.216C159.98 58.7893 160.961 58.4373 162.284 58.16C163.606 57.8827 164.769 57.744 165.772 57.744C167.18 57.744 168.46 58.0533 169.612 58.672C170.764 59.2907 171.66 60.0587 172.3 60.976C172.556 61.36 172.684 61.7013 172.684 62C172.684 62.3413 172.534 62.6613 172.236 62.96C171.937 63.2587 171.638 63.408 171.34 63.408C171.212 63.408 171.062 63.3867 170.892 63.344C170.721 63.3013 170.593 63.248 170.508 63.184ZM189.913 67.728C190.084 68.0267 190.223 68.464 190.329 69.04C190.436 69.5947 190.489 70.096 190.489 70.544C190.489 71.12 190.425 71.76 190.297 72.464C190.169 73.168 190.052 73.712 189.945 74.096C188.473 76.784 186.297 78.128 183.417 78.128C182.351 78.128 181.263 77.776 180.153 77.072C179.044 76.368 178.276 75.5573 177.849 74.64C177.273 72.8267 176.985 71.664 176.985 71.152C176.985 70.2987 177.167 69.392 177.529 68.432C177.913 67.472 178.393 66.64 178.969 65.936C179.353 65.4453 180.015 65.0293 180.953 64.688C181.892 64.3253 182.745 64.144 183.513 64.144C185.007 64.144 186.265 64.432 187.289 65.008C188.335 65.5627 189.209 66.4693 189.913 67.728ZM187.129 72.88C187.236 72.6667 187.289 71.952 187.289 70.736C187.289 70.1173 187.172 69.5093 186.937 68.912C186.724 68.3147 186.404 67.8027 185.977 67.376C185.935 67.3333 185.817 67.2693 185.625 67.184C185.433 67.0773 185.167 66.9813 184.825 66.896C184.505 66.7893 184.132 66.736 183.705 66.736C182.511 66.736 181.636 67.216 181.081 68.176C180.527 69.136 180.249 70.224 180.249 71.44C180.249 71.632 180.313 72.0267 180.441 72.624C180.569 73.2213 180.665 73.6053 180.729 73.776C180.9 74.0747 181.241 74.4267 181.753 74.832C182.287 75.216 182.863 75.408 183.481 75.408C184.441 75.408 185.199 75.184 185.753 74.736C186.329 74.2667 186.788 73.648 187.129 72.88ZM198.003 76.24C198.003 76.7733 197.79 77.2747 197.363 77.744C196.937 78.192 196.467 78.416 195.955 78.416C195.358 78.416 194.814 78.256 194.323 77.936C193.833 77.5947 193.587 77.168 193.587 76.656C193.587 75.8453 193.737 75.248 194.035 74.864C194.355 74.48 194.825 74.288 195.443 74.288C196.169 74.288 196.777 74.4693 197.267 74.832C197.758 75.1733 198.003 75.6427 198.003 76.24ZM205.878 76.24C205.878 76.7733 205.665 77.2747 205.238 77.744C204.812 78.192 204.342 78.416 203.83 78.416C203.233 78.416 202.689 78.256 202.198 77.936C201.708 77.5947 201.462 77.168 201.462 76.656C201.462 75.8453 201.612 75.248 201.91 74.864C202.23 74.48 202.7 74.288 203.318 74.288C204.044 74.288 204.652 74.4693 205.142 74.832C205.633 75.1733 205.878 75.6427 205.878 76.24ZM213.753 76.24C213.753 76.7733 213.54 77.2747 213.113 77.744C212.687 78.192 212.217 78.416 211.705 78.416C211.108 78.416 210.564 78.256 210.073 77.936C209.583 77.5947 209.337 77.168 209.337 76.656C209.337 75.8453 209.487 75.248 209.785 74.864C210.105 74.48 210.575 74.288 211.193 74.288C211.919 74.288 212.527 74.4693 213.017 74.832C213.508 75.1733 213.753 75.6427 213.753 76.24ZM221.18 59.44C221.18 60.592 221.116 62.2773 220.988 64.496C220.86 66.6293 220.796 68.2613 220.796 69.392C220.796 69.6907 220.818 70.3093 220.86 71.248C220.839 71.6107 220.711 71.888 220.476 72.08C220.242 72.2507 219.964 72.336 219.644 72.336C219.303 72.336 218.994 72.2507 218.716 72.08C218.439 71.9093 218.268 71.6853 218.204 71.408C217.948 69.6587 217.82 67.568 217.82 65.136L217.852 60.144C217.852 59.3547 217.948 58.7147 218.14 58.224C218.354 57.712 218.802 57.456 219.484 57.456C220.06 57.456 220.487 57.648 220.764 58.032C221.042 58.3947 221.18 58.864 221.18 59.44ZM219.484 74C220.935 74 221.66 74.544 221.66 75.632C221.66 76.1867 221.479 76.6987 221.116 77.168C220.775 77.616 220.338 77.84 219.804 77.84C219.164 77.84 218.642 77.648 218.236 77.264C217.831 76.8587 217.628 76.3893 217.628 75.856C217.628 75.3867 217.799 74.96 218.14 74.576C218.503 74.192 218.951 74 219.484 74Z" fill="black"/>
</svg>
        </div>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col items-center justify-center flex-grow'>
          <div className='flex  justify-center'>
            <img src={ready} alt="Thinking Panda" className='h-[300px]' />
           

            
          </div>
          
         
        </div>
        <div className='w-[380px] mx-auto '>
          <button
            onClick={nextpage}
            className='bg-[#fbbb01] hover:bg-[#fbc835] px-3 py-3 rounded text-[#fffefe] font-semibold w-full'
          >
            Continue
          </button>
        
        </div>
      </div>
    </div>
    </section>
  );
}

export default Page6;


