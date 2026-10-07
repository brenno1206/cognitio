import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
  TbBrandGithub,
  TbMail,
} from 'react-icons/tb';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaRegFolder, FaRegFolderOpen } from 'react-icons/fa';

const Icons = {
  OpenSidebarIcon: TbLayoutSidebarLeftExpand,
  CloseSidebarIcon: TbLayoutSidebarLeftCollapse,
  Close: IoCloseCircleSharp,
  Folder: FaRegFolder,
  OpenFolder: FaRegFolderOpen,
  Github: TbBrandGithub,
  Mail: TbMail,
};

export default Icons;
