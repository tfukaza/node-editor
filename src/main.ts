
import { worldToCamera } from './helper.js';
import { GlobalStats, NodeConfig } from './types';
import { NodeUI } from './node.js';

export default class SnapLine {

    g: GlobalStats;

    constructor(canvasContainerID: string) {
        
        this.g = {
            canvas: null,
            canvasContainer: null,
            
            isMouseDown: false,     // If mouse is being pressed
            mousedown_x: 0,         // Initial mouse  position when mouse is pressed
            mousedown_y: 0,         
            mouse_x: 0,             // Current mouse position
            mouse_y: 0,
            camera_pan_start_x: 0,  // Initial camera position when camera is being panned
            camera_pan_start_y: 0,
            dx: 0,                  // How much the mouse has moved since being pressed
            dy: 0,
            dx_offset: 0,           // Offset for dx and dy
            dy_offset: 0,

            camera_x: 0,
            camera_y: 0,
            zoom: 1,
            cameraWidth: 0,
            cameraHeight: 0,

            targetNode: null,
            hoverDOM: null,
            gid: 0,
            
            nodeArray: [],
            globalLines: [],
            globalNodes: {},
        }
        const g = this.g;

        g.canvasContainer = document.getElementById(canvasContainerID);
        if (!g.canvasContainer) {
            console.error("Canvas not found");
            return;
        }
        
        g.cameraWidth = g.canvasContainer.clientWidth;
        g.cameraHeight = g.canvasContainer.clientHeight;
        console.debug(`Canvas size: ${g.cameraWidth}x${g.cameraHeight}`);
        
        const c = document.createElement('div');
        c.style.position = 'absolute';
        c.style.top = '0px';
        c.style.left = '0px';
        c.className = 'canvas';
        g.canvasContainer.appendChild(c);
        g.canvas = c;
        
        g.canvas.style.transform = `translate(${g.cameraWidth/2}px, ${g.cameraHeight/2}px)`;

        g.canvasContainer.addEventListener('mousedown', function (e) {
            g.isMouseDown = true;
            g.mousedown_x = e.clientX;
            g.mousedown_y = e.clientY;
            g.camera_pan_start_x = g.camera_x;
            g.camera_pan_start_y = g.camera_y;
            for (const node of g.nodeArray) {
                node.offFocus();
            }
        });

        g.canvasContainer.addEventListener('mousemove', function (e) {

            g.hoverDOM = e.target;
            // get mouse position relative to canvas
            g.mouse_x = e.clientX - g.canvasContainer!.offsetLeft;
            g.mouse_y = e.clientY - g.canvasContainer!.offsetTop;
      
            if (g.isMouseDown) {
                g.dx = e.clientX - g.mousedown_x + g.dx_offset;
                g.dy = e.clientY - g.mousedown_y + g.dy_offset;
                
                if (g.targetNode == null) {
                    g.camera_x = g.camera_pan_start_x -g.dx/g.zoom;
                    g.camera_y = g.camera_pan_start_y -g.dy/g.zoom;
                    g.canvas!.style.transform = `matrix3d(${worldToCamera(g.camera_x, g.camera_y, g)})`;
                    //g.canvasContainer.style.backgroundPosition = -g.camera_x* g.zoom + "px " + -g.camera_y* g.zoom + "px";
                    g.canvas!.style.cursor = "grabbing";
                }
            }
        });

        g.canvasContainer.addEventListener('wheel', function (e) {
            const d_zoom = (1*g.zoom) * (-e.deltaY / 600);
            e.preventDefault();

            if (g.zoom + d_zoom < 0.2) {
                g.zoom = 0.2;
                return;
            } else if (g.zoom + d_zoom > 3) {
                g.zoom = 3;
                return;
            }

            // Move the camera closer to the mouse while zooming 
            const d_zoom_x = (g.mouse_x - g.cameraWidth/2)*d_zoom;
            const d_zoom_y = (g.mouse_y - g.cameraHeight/2)* d_zoom;
            g.zoom += d_zoom;
            // Needs to be divided by g.zoom twice, 
            // once to account for the zoom itself, and once more because this value will be 
            // multiplied by g.zoom during worldToCamera()
            g.camera_x += d_zoom_x/g.zoom/g.zoom;
            g.camera_y += d_zoom_y/g.zoom/g.zoom;
            g.canvas!.style.transform = `matrix3d(${worldToCamera(g.camera_x, g.camera_y, g)})`;
            // scale background image
            //g.canvasContainer.style.backgroundSize = g.zoom * 40 + "px " + g.zoom * 40 + "px";
            e.preventDefault();
        });

        g.canvasContainer.addEventListener('mouseup', function (_) {

            g.isMouseDown = false;
            g.canvas!.style.cursor = "default";
            if (g.targetNode == null) {
            } else {
                g.targetNode.domMouseUp();
            }
            g.targetNode = null;
            g.dx = 0;
            g.dy = 0;
            g.dx_offset = 0;
            g.dy_offset = 0;
            
        });

        console.info('Initialized SnapLine...');
    
        window.requestAnimationFrame(this.step.bind(this));
    }

    step() {
        if (this.g.targetNode) {
            this.g.targetNode.onDrag();
        }
        window.requestAnimationFrame(this.step.bind(this));
    }

    addNode(config: NodeConfig, x: number, y:number) {
        const n: NodeUI = new NodeUI(config, this.g, x, y);
        this.g.globalNodes[n.gid] = n;
        return n;
    }

    deleteNode(id: string){
        console.debug(id);
    }

    connectNodes(node0: string, outputID:string, node1: string, inputID: string){
        console.debug(node0, outputID, node1, inputID);
    }
}
