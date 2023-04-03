import Link from "next/link";
import Image from "next/image";

export default function Lefts() {
  return (
    <>
      <div className='overflow-y-auto py-4 px-3 bg-gray-50 rounded left-sidebar'>
        <div className='imp-link'>
          <ul>
            <li className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black-500 hover:bg-gray-200'>
              <Link className='' href='/addemp'>
                <a>
                  <Image
                    src='/../public/images/Icon/teamwork.png'
                    width={30}
                    height={25}
                    alt='add-emp-icon'
                  />
                  Add Employee
                </a>
              </Link>
            </li>
            <li className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-200'>
              <Link href='/emplist'>
                <a>
                  <Image
                    src='/../public/images/Icon/to-do-list.png'
                    width={30}
                    height={25}
                    alt='todo-icon'
                  />
                  Employee List
                </a>
              </Link>
            </li>
            <li className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-200'>
              <Link href='/empsal'>
                <a>
                  <Image
                    src='/../public/images/Icon/wallet.png'
                    width={30}
                    height={25}
                    alt='salary-icon'
                  />
                  Pay salary
                </a>
              </Link>
            </li>
            <li className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-200'>
              <Link href='/contractbal'>
                <a>
                  <Image
                    src='/../public/images/Icon/salary.png'
                    width={30}
                    height={25}
                    alt='contract-bal-icon'
                  />
                  Contract Balance
                </a>
              </Link>
            </li>
            <li className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-200'>
              <Link href='/'>
                <a>
                  <Image
                    src='/../public/images/Icon/setting.png'
                    width={30}
                    height={25}
                    alt='settings-icon'
                  />
                  Settings
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='feed'>
          <p>Having Queries ?</p>
        </div>
      </div>
    </>
  );
}
