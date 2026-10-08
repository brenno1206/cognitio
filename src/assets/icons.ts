import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
  TbBrandGithub,
  TbMail,
} from 'react-icons/tb';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaRegFolder, FaRegFolderOpen } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Icons = {
  OpenSidebarIcon: TbLayoutSidebarLeftExpand,
  CloseSidebarIcon: TbLayoutSidebarLeftCollapse,
  Close: IoCloseCircleSharp,
  Folder: FaRegFolder,
  OpenFolder: FaRegFolderOpen,
  Github: TbBrandGithub,
  Mail: TbMail,
  Light: MdLightMode,
  Dark: MdDarkMode,
};

export default Icons;
