import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
  TbBrandGithub,
  TbMail,
} from 'react-icons/tb';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { FaRegFolder, FaRegFolderOpen } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { TbCopy, TbCopyCheckFilled } from 'react-icons/tb';

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
  Copy: TbCopy,
  Copied: TbCopyCheckFilled,
};

export default Icons;
