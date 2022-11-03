import * as React from "react";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import "./AllList.css";

const tempList = [
	{ name: "grocery for party", date: "11/03/2022" },
	{ name: "grocery for this week's menu", date: "10/30/2022" },
	{ name: "grocery for emergency supply", date: "10/25/2022" },
];

export default function AllList() {
	const [lists, setLists] = useState([]);
	useEffect(() => {
		setLists(tempList);
	}, []);
	return (
		<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
			{lists.map((obj) => {
				return (
					<>
						<ListItem className="lists">
							<ListItemAvatar>
								<Avatar>
									<Icon path={mdiCartOutline} />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={obj.name} secondary={obj.date} />
						</ListItem>
					</>
				);
			})}
		</List>
	);
}
