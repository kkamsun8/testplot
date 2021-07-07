import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { TreeView, TreeItem } from '@material-ui/lab';


const useStyles = makeStyles({
    root: {
        fontFamily: "Malgun Gothic",
        fontSize: "20px"
    },
});

const Nav = () => {
    const classes = useStyles()
    return (
        <nav className="bg-gray-100 rounded inline-block float-left m-1 box-border" style={{ height: 830, width: 250 }}>
            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label="안인-강릉 TL1 D1">
                    <TreeItem nodeId="2" label="EBG" />
                    <TreeItem nodeId="3" label="JB#1" />
                    <TreeItem nodeId="4" label="EBA" />
                </TreeItem>
                <TreeItem nodeId="5" label="안인-강릉 TL2 D1">
                    <TreeItem nodeId="10" label="EBG" />
                    <TreeItem nodeId="6" label="EBA" />
                </TreeItem>
            </TreeView>
        </nav>
    )
}

export default Nav
