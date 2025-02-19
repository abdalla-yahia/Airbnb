import { useRef } from 'react';

const CircularSlider = () => {
    const divRef = useRef(null);
    const startXRef = useRef(0);
    const isDraggingRef = useRef(false);
    const maxDelta = 100; // المسافة المطلوبة لإكمال دائرة كاملة (360 درجة)

    // تعيين أحداث السحب للماوس
    const handleMouseDown = (e) => {
        startXRef.current = e.clientX;
        isDraggingRef.current = true;
        divRef.current.style.transition = 'none';
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (!isDraggingRef.current) return;
        const deltaX = e.clientX - startXRef.current;
        const rotation = (deltaX / maxDelta) * 360;
        divRef.current.style.transform = `rotate(${rotation}deg)`;
    };

    const handleMouseUp = () => {
        isDraggingRef.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        resetRotation();
    };

    // تعيين أحداث السحب للشاشات التي تعمل باللمس
    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        startXRef.current = touch.clientX;
        isDraggingRef.current = true;
        divRef.current.style.transition = 'none';
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
    };

    const handleTouchMove = (e) => {
        if (!isDraggingRef.current) return;
        const touch = e.touches[0];
        const deltaX = touch.clientX - startXRef.current;
        const rotation = (deltaX / maxDelta) * 360;
        divRef.current.style.transform = `rotate(${rotation}deg)`;
    };

    const handleTouchEnd = () => {
        isDraggingRef.current = false;
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        resetRotation();
    };

    // إعادة الديف إلى وضعه الأصلي مع حركة سلسة
    const resetRotation = () => {
        divRef.current.style.transition = 'transform 0.5s ease';
        divRef.current.style.transform = 'rotate(0deg)';
        setTimeout(() => {
            divRef.current.style.transition = '';
        }, 500);
    };

    return (
        <div className='toggle_dates_time'
            ref={divRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#4CAF50',
                borderRadius: '50%',
                cursor: 'grab',
                touchAction: 'none', // لمنع التمرير على الأجهزة التي تعمل باللمس
            }}
        />
    );
};

export default CircularSlider;