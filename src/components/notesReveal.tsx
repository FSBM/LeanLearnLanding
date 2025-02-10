import {easeInOut, motion } from  'framer-motion';
import { easeIn } from 'motion';

interface Props{
    children: React.ReactNode,
    positionFrom:number,
    positionTo:number
}




export default function NotesReveal({ children, positionFrom, positionTo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x:positionFrom}}
            whileInView={{ opacity: 1 , x:positionTo||0}}
            transition={{ duration: 0.5, ease:'easeInOut'}}
            className=''
        >
            {children}
        </motion.div>
    );
}